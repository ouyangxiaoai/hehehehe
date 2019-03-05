/**
 * 曾经的面试题
 */

 // 实现一个加减的链式方法例如：a.init(0).add(1).reduce(2)=>-1 考验闭包 可以加个属性判断是否经过init:原理是init后改变状态，其它方法后也改变状态进行判断如+1

 const a={
     s: 0,
     init:(m=0)=>{
         a.s=m
         return a
     },
     add:(m)=>{
         a.s+=m
         return a
     },
     reduce:(m)=>{
         a.s-=m
         return a
     }
 }
 a.init(0).add(3).reduce(10)
 console.log(a.s)
 
 // 生成一个2-32的随机数包含2和32
    let m=()=>Math.ceil(Math.random()*31)
    for(let i=0;i<10;i++){
        console.log(m())
    }
 // 判断Array的三种方法
 
const arr=[]
arr instanceof Array
Array.isArray(arr)
Object.prototype.toString.call(arr) === '[object, Array]'