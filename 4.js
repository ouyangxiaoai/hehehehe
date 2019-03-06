/**
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * 思路：首先得到一维数组去重，然后进行排序
 */
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log([...new Set(arr.toString().split(',').concat())].sort((a,b)=>a-b).map(Number)) // 通过toString方法变成字符串然后再操作
//console.log([...new Set(arr.flat(Infinity))].sort((a,b)=>a-b))
let res=[]
function flats(arr){
        return arr.map(item=>{
            if(!Array.isArray(item)){
                res.push(item)
            }else{
                flats(item)
            }
        })
}
flats(arr)
res=[...new Set(res)].sort((a,b)=>a-b)
console.log(res)
debugger
