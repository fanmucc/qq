// 懒加载    函数节流
//aaa
export function lazyload(images) {
    let imgs = [].slice.call(images) 

    
let onscroll = _.throttle(function() {
        //如果存放图片的数组为0的话 ，结束监听
        if(imgs.length === 0) {
            return window.removeEventListener('scroll',onscroll)
        }
        // 找到含有lazyload 的图片
        imgs = imgs.filter(img => img.classList.contains('lazyload'))
        imgs.forEach(img => {
            if(inViewport(img)) {
                loadImage(img)
            }
        })
    },1000)
    window.addEventListener('scroll',onscroll)
    window.dispatchEvent(new Event('scroll'))
    // function onscroll() {
    //     console.log(new Date())
    //     //如果存放图片的数组为0的话 ，结束监听
    //     if(imgs.length === 0) {
    //         return window.removeEventListener('scroll',onscroll)
    //     }
    //     // 找到含有lazyload 的图片
    //     imgs = imgs.filter(img => img.classList.contains('lazyload'))
    //     imgs.forEach(img => {
    //         if(inViewport(img)) {
    //             loadImage(img)
    //         }
    //     })
    // }

    function  inViewport(img) {
        let {top, left, right, bottom} = img.getBoundingClientRect()
        let vpWidth = document.documentElement.clientWidth
        let vpHeight = document.documentElement.clientHeight
        // 判断是否在视窗内  。
        return (
            (top > 0 && top < vpHeight || bottom >0 && bottom <vpHeight) &&
            (left >0 && left < vpWidth || right > 0 && right < vpWidth)
        )
    }

    function loadImage(img) {
        let image = new Image()
        image.src = img.dataset.src
        image.onload = function() {
            img.src = image.src
            img.classList.remove('lazyload')
        }
    }
}