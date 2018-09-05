// 立刻执行函数
import './tab.js'
import { Recommend } from './recommend.js'
import { Search } from './search.js'
import { MusicPlayer } from './musicplayer.js'
import { Toplist } from './toplist.js'

    let recommend = new Recommend(document.querySelector('.rec-view')).launch()
    let toplist = new Toplist(document.querySelector('.rank-view')).launch()
    // var xhr = new XMLHttpRequest()
    // xhr.open('GET', 'https://qq-music-api.now.sh/', true)
    // xhr.onreadystatechange = function(){
    // if(xhr.readyState === 4) {
    //         if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
    //         //成功了
    //         console.log(xhr.responseText)
    //         } else {
    //         console.log('服务器异常')
    //         }
    //     }
    // }
    // xhr.onerror = function(){
    // console.log('服务器异常')
    // }
    // xhr.send()


    let search = new Search(document.querySelector('.search-view'))
    let player = new MusicPlayer(document.querySelector('#player'))
    // let inBtn = document.querySelector('input')
    // let inp = document.querySelector('.quxiao')
    //     inBtn.addEventListener('click',function() {
    //         inBtn.classList.add('active')
    //         inp.classList.add('active')
    //     })
    //     inp.addEventListener('click',function() {
    //         inBtn.classList.remove('active')
    //         inp.classList.remove('active')
    //     })

    

    //获取推荐页面的ajax
    // fetch('/json/rec.json')
    // .then(res => res.json())
    // .then(render)


     //获取排行榜页面的ajax
    // fetch('/json/rank.json')
    // .then(res => res.json())
    // .then(json => json.data.topList)
    // // console.log(json)
    // .then(renderToplist)
    // console.log(document.querySelector('.rank-view .rank-list'))
    // lazyload(document.querySelectorAll('.lazyload'))


    // 获取推荐页面文件的内容  因为有两块内容 所以模块化处理   
    // function render(json) {
    //     renderSlider(json.data.slider)
    //     renderRadios(json.data.radioList)
    //     lazyload(document.querySelectorAll('.lazyload'))
    // }


    

    // 分析数据
    // function renderSlider(slides) {
    //     slides = slides.map(slide => {
    //         return {link: slide.linkUrl,image : slide.picUrl}
    //         })
    //    // let slides = json.data.slider.map(function(slide) {
    //    //     var data = {
    //    //         link : slide.linkUrl,
    //    //         image : slide.picUrl
    //    //     }
    //    //     console.log(data.image)
    //    // })
    //    new Slider({
    //        el:  document.querySelector('#slider'),
    //        slides
    //    })
    // }

    // function renderRadios(radios) {
    //     // console.log(radios)
    //     document.querySelector('.radios .list').innerHTML = radios.map(radio =>
    //         `<div class="list-item">
    //             <div class="list-media">
    //                 <img class="lazyload" data-src="${radio.picUrl}">
    //                 <span class="icon icon-play"></span>
    //             </div>
    //             <div class="list-title">${radio.Ftitle}</div>
    //         </div>`
    //         ).join('')
    // }
    // //注意大小写
    // function renderToplist(list) {
    //     // console.log('list',list)
    //     document.querySelector('.rank-list').innerHTML = list.map(item =>  
    //         `<li class="rank-item">
    //                 <div class="item-mian">
    //                     <a href="#" class="item-media">
    //                         <img class="lazyload" data-src="${item.picUrl}" src="https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_215830524.jpg?max_age=2592000">
    //                         <span class="listen_count"><i class="icon icon_listen"></i>${item.listenCount}万</span>
    //                     </a>
    //                     <div class="item-info">
    //                         <div class="info-cont">
    //                             <h3 class="info-tit">${item.topTitle}</h3>
    //                             ${songlist(item.songList)}
    //                         </div>
    //                         <i class="info-arrow"></i>
    //                     </div>
    //                 </div>
    //             </li>`).join('')
    //             lazyload(document.querySelectorAll('.rank-list .lazyload'))
    //         function songlist(songs) {
    //             // console.log(songs)
    //             return songs.map((song,i) =>
    //                 `<p>${i +1 }<span class="text_name">${song.songname}</span>- ${song.singername}</p>`).join('')
    //         }
    // }
    



    // 图片在文件中寻找的老方法
    // let slider = new Slider( {
    //    el:  document.querySelector('#slider'),
    //    //图片信息
    //    slides: [
    //     { link: '#1',image: 'images/hsy.jpg'},
    //     { link: '#2',image: 'images/swm.jpg'},
    //     { link: '#3',image: 'images/tf.jpg'},
    //     { link: '#4',image: 'images/xiha.jpg'},
    //     { link: '#5',image: 'images/wk.jpg'}
    //     ]
    // })


    
    let bofang = document.querySelector('.show-player')
    let yincang = document.querySelector('#player')
    bofang.addEventListener('click',function() {
        yincang.classList.add('show')
    })
    
    
    function onHashChange(){
        let hash = location.hash
        if (/^#player\?.+/.test(hash)) {
          let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
          let options = matches && matches.reduce((res, cur) => {
            let arr = cur.split('=')
            res[arr[0]] = decodeURIComponent(arr[1])
            return res
          }, {})
          player.play(options)
        } else {
          player.hide()
        }
      }

    onHashChange()
    window.addEventListener('hashchange', onHashChange)
        
    window.slider = slider
    window.player=player
    // player.lyrics
    // player.lyrics.reset(text)
   





