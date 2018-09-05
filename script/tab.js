// 点击切换   事件代理




document.addEventListener('click',function(event) {
//   console.log(event)  
 let target = event.target
//  console.log(target)
// console.log(target.dataset.role)
 if(target.dataset.role !== 'tab') return
//  [].forEach.call(target.parentElement.children, tab => {
//     tab.classList.remove('active')
// })
[].forEach.call(target.parentElement.children, function(tab) {
    tab.classList.remove('active')
})
target.classList.add('active')
 
 let content = document.querySelector(target.dataset.view)
//  console.log('content',content)
 if(content) {
    [].forEach.call(content.parentElement.children,child => {
        child.style.display = 'none'
    })
     content.style.display = 'block'
     
 }
})