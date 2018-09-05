import { TOPLIST_URL } from './contant.js'
import { lazyload } from './lazyload.js'

export class Toplist {
    constructor(el) {
        this.$el = el
    }

    launch() {
        fetch(TOPLIST_URL)
            .then(res => res.json())
            .then(json =>this.list =  json.data.topList)
            .then(json => this.render(json))
            return this
    }
    render(list) {
        this.$el.querySelector('.rank-list').innerHTML = list.map(item =>  
            `<li class="rank-item">
                    <div class="item-mian">
                        <a href="#" class="item-media">
                            <img class="lazyload" data-src="${item.picUrl}" src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_215830524.jpg?max_age=2592000">
                            <span class="listen_count"><i class="icon icon_listen"></i>${item.listenCount}万</span>
                        </a>
                        <div class="item-info">
                            <div class="info-cont">
                                <h3 class="info-tit">${item.topTitle}</h3>
                                ${this.songlist(item.songList)}
                            </div>
                            <i class="info-arrow"></i>
                        </div>
                    </div>
                </li>`).join('')
                lazyload(this.$el.querySelectorAll('.rank-list .lazyload'))
    }
    songlist(songs) {
        return songs.map((song,i) =>
            `<p>${i +1 }<span class="text_name">${song.songname}</span>- ${song.singername}</p>`).join('')
    }
    
}
