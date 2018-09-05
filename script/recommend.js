import {RECOMMEND_URL} from './contant.js'
import{Slider} from './slider.js'
import { lazyload } from './lazyload.js'

export class Recommend{
    constructor(el) {
        this.$el = el
    }
    launch() {
        fetch(RECOMMEND_URL)
            .then(res => res.json())
            .then(json => this.json = json)
            .then(() => this.render())
            return this
    }
    render() {
        this.renderSlider(this.json.data.slider)
        this.renderRadios(this.json.data.radioList)
        lazyload(document.querySelectorAll('.lazyload'))
    }
    renderSlider(slides) {
        this.slider = new Slider({
            el: this.$el.querySelector('#slider'),
            slides: slides.map(slide => ({ 
              link: slide.linkUrl.replace('http://', 'https://'), 
              image: slide.picUrl.replace('http://', 'https://')
            }))
          })
    }
    renderRadios(radios) {
        this.$el.querySelector('.radios .list').innerHTML = radios.map(radio =>
            `<div class="list-item">
                <div class="list-media">
                    <img class="lazyload" data-src="${radio.picUrl}">
                    <span class="icon icon-play"></span>
                </div>
                <div class="list-title">${radio.Ftitle}</div>
            </div>`
            ).join('')
    }
}
