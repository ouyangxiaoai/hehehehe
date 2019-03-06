/**
 * 防抖：高频事件触发后的一段时间内不会再去执行延时方法，但是立即刷新间隔时间
 * 场景：输入框相关、不断改变窗口大小等
 */
function debounce(fn){ // 不会立即执行
    let timer=null
    return function(){
        console.log(this)
        if(timer)clearTimeout(timer) // 每次进来清除上一次定时任务
        timer=setTimeout(()=>{
            console.log(this)
            fn.apply(this, arguments) // 箭头函数在这里this会指向触发对象，所以apply绑定this并且传入arguments比如e。如果是传统函数，this会指向window，所以需要在之前绑定this或者绑定具体对象
        }, 5000)
    }
}
function say(){
    console.log(this.value+'a')
}
let inp=document.getElementById('deb')
inp.addEventListener('input', debounce2(say))

function debounce2(fn){ // 立即执行
    let timer=null
    return function(){
        console.log(timer)
        if(timer)clearTimeout(timer)
        let now=!timer // 清除定时器后timer的值还是会返回ID,表现出来就是自动加一，因为每次清除都是不一样的timer,只有手动变成null才会执行后面的方法
        console.log(timer)
        timer=setTimeout(()=>{
            timer=null
        }, 5000)
        if(now)fn.apply(this, arguments)
    }
}

/**
 * 节流：一段时间内只会触发一次高频事件
 * 场景：鼠标点击、无限加载
 */
function throttle(fn){
    let timer=null
    return function(){
        if(!timer){
            timer=setTimeout(()=>{
                timer=null
                fn.apply(this, arguments)
            }, 3000)
        }
    }
}
var a=0
function add(){
    a++
    console.log(a)
}
window.addEventListener('mousemove', throttle2(add))
function throttle2(fn){
    let pre=0
    return function(){
        let now=Date.now()
        if(now-pre>3000){
            fn.apply(this,arguments)
            pre=now
        }
    }
}