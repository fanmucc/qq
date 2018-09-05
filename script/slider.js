// es6构造函数    组件复用
// 不懂，为什么可以得到#slider ，因为布置到window全局了吗 

export class Slider {
    constructor(options = {}) {
        this.$el = options.el
        this.slides = options.slides
        this.interval = options.interval || 3000   // 传进参数的话用传递参数的，没有就3秒
        this.index = 0
        this.render()
        this.start()
        // this.length = this.$wrap.children.length
        
        // console.log('wrap',this.$wrap)
        // console.log('length',this.length)
    }

    // 渲染页面
    render() {
        this.$el.innerHTML = `<div class="qq-slider-wrap"></div>`
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = `${this.slides.length * 100}%`
        this.$wrap.innerHTML = this.slides.map(slide => 
            `<div class="qq-slider-item">
                <a href="${slide.link}">
                    <img src="${slide.image}">
                </a>
            </div>`
        ).join('')
    }
    // 开始轮播
    start() {
        // setInterval(() => {
        //     this.next()
        // },this.interval)
        setInterval(this.next.bind(this),this.interval)
    }

    next() {
        this.index += 1
        if(this.index === this.slides.length) {
            this.$wrap.style.transform = `translate(0)`
            this.index = 0
            return
        }
        let x = `-${this.index * (100/ this.slides.length)}%`
        this.$wrap.style.transform =`translate(${x})`
    }
}