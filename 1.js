/**
 * 基础排序算法实践
 */
const arr = [1,3,2,9,6,8,4,5]
// 冒泡：比较相邻两个元素大小 外部循环len-1次 内部循环len-1-o次 从0开始-o表示已经冒泡出来的数
function maopao(arr){
    if(!arr.length){
        throw new Error('这不是一个数组')
    }
    const len = arr.length
    for(let o=0;o<=len-1;o++){
        for(let i=0;i<=len-1-o;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
    }
    return arr
}
console.log(maopao(arr))

// 选择排序：从第一个元素开始跟后面每个相比较选出最小值 外部循环len-1次 内部循环i=o o表示已经选择出最小的数
function select(arr){
    if(!arr.length){
        throw new Error('这不是一个数组')
    }
    const len = arr.length
    for(let o=0;o<=len-1;o++){
        let min=arr[o]
        for(let i=o+1;i<=len-1;i++){
            if(arr[i]<min){
                min=arr[i]
            }
        }
    }
    return arr
}
console.log(select(arr))

// 插入排序：new和已经排好序的进行对比找到中间位置
function insert(arr,n){
    const len = arr.length
    for(let i=0;i<len-1;i++){
        if(n>arr[i] && n<arr[i+1]){
            arr.splice(i+1, 0, n)
            break
        }
    }
    return arr
}
console.log(insert([1,2,3,5,6,7],4))

// 快速排序：选择基准值然后进行左右分布 最后合成
function quick(arr){
    if(!arr.length){
        throw new Error('这不是一个数组')
    }
    let base=arr.shift()
    let len=arr.length
    let l=[]
    let r=[]
    for(let i=0;i<=len-1;i++){
        if(base<arr[i]){
            r.push(arr[i])
        }else{
            l.push(arr[i])
        }
    }
    return [...l, base, ...r]
}
console.log(quick(arr))