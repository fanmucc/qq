
export class Search {
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector('#search')
        this.$songs = this.$el.querySelector('.song-list')
        this.$input.addEventListener('keyup',this.onKeyUp.bind(this))
        this.keyword = ''
        this.page =1 
        this.songs = []
        this.perpage = 20
        this.nomore = false
        this.fetching =false
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll',this.onscroll)
        
    }
    onKeyUp(event) {
        let keyword = event.target.value.trim()
        if(!keyword) return this.reset()
        if (event.keyCode !== 13) return 
        this.loading()
        this.search(keyword)
        
    }
    onScroll(event) {
        if (this.nomore) return window.removeEventListener('scroll', this.onscroll)
        if(document.documentElement.clientHeight + pageYOffset > document.body.scrollHeight - 50) {
            this.search(this.keyword, this.page + 1)
        }
        
    }
    reset() {
        this.page = 1;
        this.keyword =''
        this.songs = []
        this.nomore = false
        this.$songs.innerHTML =''
        this.$el.querySelector('.search-loading').classList.remove('show')
    }
    search(keyword, page){
        if(this.fetching) return
        this.keyword = keyword
        this.fetching = true 
        
        fetch(`https://qq-music-api.now.sh/search?keyword=${this.keyword}&page=${page || this.page}`)
         .then(res => res.json())
         .then(json => {
             this.page = json.data.song.curpage
             this.nomore = (json.message === 'no results')
             this.songs.push.apply(this.songs,json.data.song.list)
             return json.data.song.list
         })
         .then(songs => this.append(songs))
         .then(() => this.fetching =false)
         .catch(()=> this.fetching = false)
    }
  
    loading() {
        this.$el.querySelector('.search-loading').classList.add('show')
    }
    append(songs) {
        let html = songs.map(song => {
            let artist = song.singer.map(s => s.name).join(' ')
            return `
              <a class="song-item"
                 href="#player?artist=${artist}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}&songmid=${song.songmid}">
                <i class="icon icon-music"></i>
                <div class="song-name ellipsis">${song.songname}</div>
                <div class="song-artist ellipsis">${artist}</div>
              </a>`}).join('')
          this.$songs.insertAdjacentHTML('beforeend', html)
    }
    done() {
        this.fetching = false
        if (this.nomore) {
          this.$el.querySelector('.icon-jiazai').style.display = 'none'
          this.$el.querySelector('.loading-text').style.display = 'none'
          this.$el.querySelector('.loading-done').style.display = 'block'
          this.$el.querySelector('.search-loading').classList.add('show')
        } else {
          this.$el.querySelector('.search-loading').classList.remove('show')
        }
      }
}











// 使用api数据，不进行伪造请求     
//api地址 ： https://qq-music-api.now.sh/


