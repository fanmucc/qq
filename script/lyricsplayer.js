
export class LyricsPlayer {
    constructor(el) {
        this.$el = el
        this.$el.innerHTML = `<div class="player-lyrics-lines"></div>`
        this.$lines = this.$el.querySelector('.player-lyrics-lines')
        this.text = ''
        this.index = 0
        this.elapsed = 0
        this.lyrics = []
        this.reset(this.text)
    }
    formatText(text) {
        let div = document.createElement('div')
        div.innerHTML = text
        return div.innerText
    }
    
    reset(text) {
        this.pause()
        this.index = 0
        this.elapsed = 0
        this.$lines.style.transform = `translateY(0)`
        
         let $active = this.$lines.querySelector('.active')
         if ($active) {
             $active.classList.remove('active')
         }
         if (text) {
             this.text = this.formatText(text) || ''
             this.lyrics = this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || []
             if (this.lyrics.length) this.render()
         }
         if (this.lyrics.length) {
             this.render()
             this.$lines.children[this.index].classList.add('active')
         }
     }
     update() {
        this.elapsed += 1
        if(this.index === this.lyrics.length-1) return this.reset()
        for(let i = this.index + 1;i<this.lyrics.length;i++) {
            let seconds = this.getSeconds(this.lyrics[i])
            if(this.elapsed === seconds && (!this.lyrics[i +1] || this.elapsed < this.getSeconds(this.lyrics[i+1]))){
                this.$lines.children[this.index].classList.remove('active')
                this.$lines.children[i].classList.add('active')
                this.index = i
                break
            }
        }
        if(this.index>2){
            let y = -(this.index - 2)* this.LINE_HEIGHT
            this.$lines.style.transform=`translateY(${y}px)`
        }
    }
     render() {
        let html = this.lyrics.map(line => `
        <div class="player-lyrics-line">${line.slice(10)}</div>
        `).join('')
        this.$lines.innerHTML = html
    }
    
    start() {
        this.pause()
        this.intervalId = setInterval(this.update.bind(this),1000)
    }
    restart() {
        this.reset()
        this.start()
    }
    getSeconds(line) {
    return +line.replace(/^\[(\d{2}):(\d{2}).*/, (match, p1, p2) => 60 * (+p1) + (+p2))
    }
    pause() {
        clearInterval(this.intervalId)
    }
}
LyricsPlayer.prototype.LINE_HEIGHT = 42
//[ti&#58;歌谣]&#13;&#10;[ar&#58;华谦]&#13;&#10;[al&#58;歌谣]&#13;&#10;[by&#58;]&#13;&#10;[offset&#58;0]&#13;&#10;[00&#58;00&#46;83]歌谣&#32;&#45;&#32;华谦&#13;&#10;[00&#58;02&#46;24]词：华谦&#13;&#10;[00&#58;03&#46;24]曲：华谦&#13;&#10;[00&#58;04&#46;28]&#10;[00&#58;27&#46;80]我不知道有多久&#13;&#10;[00&#58;29&#46;92]你一直在我梦中&#13;&#10;[00&#58;32&#46;48]&#10;[00&#58;34&#46;03]重复给过的温柔&#13;&#10;[00&#58;36&#46;67]反复的折磨&#13;&#10;[00&#58;39&#46;19]&#10;[00&#58;40&#46;39]你看不到我的落魄&#13;&#10;[00&#58;43&#46;14]是我太过自作&#13;&#10;[00&#58;45&#46;49]&#10;[00&#58;46&#46;85]已经过期的感动&#13;&#10;[00&#58;49&#46;37]更像是种嘲讽&#13;&#10;[00&#58;52&#46;16]&#10;[00&#58;53&#46;16]看时间不停继续跳动&#13;&#10;[00&#58;55&#46;87]像个杀手让我惶恐&#13;&#10;[00&#58;58&#46;69]眼泪一次一次愈加汹涌&#13;&#10;[01&#58;02&#46;24]不是懦弱是爱过了头&#13;&#10;[01&#58;05&#46;21]看时间不停继续的带过&#13;&#10;[01&#58;08&#46;60]所有快乐全被没收&#13;&#10;[01&#58;11&#46;52]心口一阵一阵隐隐的作痛&#13;&#10;[01&#58;15&#46;05]错过的遗憾不能拥有&#13;&#10;[01&#58;20&#46;37]&#10;[01&#58;47&#46;61]我不知道有多久&#13;&#10;[01&#58;49&#46;94]你一直在我梦中&#13;&#10;[01&#58;52&#46;40]&#10;[01&#58;53&#46;94]重复给过的温柔&#13;&#10;[01&#58;56&#46;41]反复的折磨&#13;&#10;[01&#58;59&#46;12]&#10;[02&#58;00&#46;38]你看不到我的落魄&#13;&#10;[02&#58;03&#46;06]是我太过自作&#13;&#10;[02&#58;05&#46;31]&#10;[02&#58;06&#46;69]已经过期的感动&#13;&#10;[02&#58;09&#46;18]更像是种嘲讽&#13;&#10;[02&#58;12&#46;37]&#10;[02&#58;13&#46;18]看时间不停继续跳动&#13;&#10;[02&#58;15&#46;85]像个杀手让我惶恐&#13;&#10;[02&#58;18&#46;76]眼泪一次一次愈加汹涌&#13;&#10;[02&#58;22&#46;22]不是懦弱是爱过了头&#13;&#10;[02&#58;25&#46;14]看时间不停继续的带过&#13;&#10;[02&#58;28&#46;59]所有快乐全被没收&#13;&#10;[02&#58;31&#46;52]心口一阵一阵隐隐的作痛&#13;&#10;[02&#58;35&#46;02]错过的遗憾不能拥有&#13;&#10;[02&#58;40&#46;00]&#10;[02&#58;42&#46;17]我不知道有多久&#13;&#10;[02&#58;44&#46;36]你一直在我梦中&#13;&#10;[02&#58;46&#46;86]&#10;[02&#58;48&#46;37]重复给过的温柔&#13;&#10;[02&#58;50&#46;75]反复的折磨&#13;&#10;[02&#58;53&#46;51]&#10;[02&#58;54&#46;76]你看不到我的落魄&#13;&#10;[02&#58;57&#46;57]是我太过自作&#13;&#10;[02&#58;59&#46;79]&#10;[03&#58;01&#46;14]已经过期的感动&#13;&#10;[03&#58;03&#46;56]更像是种嘲讽&#13;&#10;[03&#58;06&#46;46]&#10;[03&#58;07&#46;50]看时间不停继续的带过&#13;&#10;[03&#58;10&#46;25]所有快乐全被没收&#13;&#10;[03&#58;13&#46;18]心口一阵一阵隐隐的作痛&#13;&#10;[03&#58;16&#46;63]错过的遗憾不能拥有"