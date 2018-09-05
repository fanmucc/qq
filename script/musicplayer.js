import { LyricsPlayer } from './lyricsplayer.js'
import { ProgressBar } from './progressbar.js'
import {songUrl,lyricsUrl,albumCoverUrl} from './helpers.js'


export class MusicPlayer{
    constructor(el) {
        this.$el = el
        this.$el.addEventListener('click',this)
        this.$audio = this.createAudio()
        this.lyrics = new LyricsPlayer(this.$el.querySelector('.player-lyrics'))
        this.progress = new ProgressBar(this.$el.querySelector('.progress'))
        
    }
    createAudio() {
        this.$audio = document.createElement('audio')
        // this.$audio.loop = true
        this.$audio.id = `player-${Math.floor(Math.random() * 100)}-${+new Date()}`
        this.$audio.addEventListener('ended', () => {
          this.$audio.play()
          this.lyrics.restart()
          this.progress.restart()
        })
        document.body.appendChild(this.$audio)
        return this.$audio
    }
    handleEvent(event) {
        let target = event.target
        switch(true) {
            case target.matches('.icon-play'):
                this.onPlay(event)
                break
            case target.matches('.icon-pause'):
                this.onPause(event)
                break
            case target.matches('.icon-list'):
                this.hide()
                break
        }
    }
    onPlay(event) {
        // if (this.fetching) return
        this.$audio.play()
        this.lyrics.start()
        this.progress.start()
        event.target.classList.remove('icon-play')
        event.target.classList.add('icon-pause')
    }
    onPause(event) {
        this.$audio.pause()
        this.lyrics.pause()
        this.progress.pause()
        event.target.classList.remove('icon-pause')
        event.target.classList.add('icon-play')
    }
    play(options = {}) {
        if (!options) return
        this.$el.querySelector('.song-name').innerText = options.songname
        this.$el.querySelector('.song-artist').innerText = options.artist
        this.progress.reset(options.duration)
        // 图片和作者信息都获取到了  歌词没有
        let coverUrl = albumCoverUrl(options.albummid)
        this.$el.querySelector('.album-cover').src = coverUrl
        this.$el.querySelector('.player-background').style.backgroundImage = `url(${coverUrl})`
    
        if (options.songid) {
          if (this.songid !== options.songid) {
            this.$el.querySelector('.icon-action').className = 'icon-action icon-play'
          }
          
          this.songid = options.songid
        //   this.$audio.src=`http://ws.stream.qqmusic.qq.com${options.songid}.m4a?fromtag=46`
        this.$audio.src=songUrl(options.songmid)
        this.fetching = true
          fetch(lyricsUrl(this.songid)) 
            .then(res => res.json())
            .then(json => json.lyric)
            .then(text => this.lyrics.reset(text))
            .catch(() => {})
            .then(() => this.fetching = false)
        }
        this.show()
      }
    show() {
        this.$el.classList.add('show')
        document.body.classList.add('noscroll')
    }

    hide() {
        this.$el.classList.remove('show')
        document.body.classList.remove('noscroll')
    }
}