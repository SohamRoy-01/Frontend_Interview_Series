

//  Implementing Memoization in JavaScript...
// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache 
// returning the result from it


let sum = 0;
const calc =(n)=>{
for (let i = 0; i<= n; i++) {
    sum=sum+i;
}
return sum;
}

const memoize = (func)=>{
    let cache = {};
    return function(...args){
        let n =args[0]
        if(n in cache){
            console.log("cache")
            console.log(cache)
            return cache[n]
        }else{
            console.log("calculating first time")
            let result = func(n)
            cache[n] = result
            return result
        }
    }
}

console.time()
const efficient = memoize(calc)
console.log(efficient(5))
console.timeEnd()


console.time()
console.log(efficient(5))
console.timeEnd()

// console.time()
// console.log(calc(5))
// console.timeEnd()