// Map ,set ,WeakSet, WeakMap

"use strict";

// set :- It contains only Unique Values

// Object Constructor


let myArray = [1,2,3,4,5]
let obj = new Set(myArray);
// console.log(obj)
obj.add(6)

obj.delete(5)
console.log(obj)
console.log(obj.size)
var obj1 = {name:"Soham"}
obj.add(obj1)
console.log(obj)
// obj.clear()
// console.log(obj)
console.log(obj.has(8));


for (let new1 of obj){
    console.log(new1)
}

obj.forEach((e)=>{
console.log(e)
})


// map -> keys -> values 

let myMap = new Map([['a1','Soham'],['a2','Vikash']])
// myMap.set("a2","Ajay")
myMap.set("a3","Ajay")
// myMap.delete("a2")
console.log(myMap.get("a2"))
console.log(myMap)

for(let [key,value] of myMap){
    console.log(`key:- ${key} , value:- ${value}`)
}


// The forEach method receives a callback as first parameter , and this callback could receive three parameters currentValue,index,array in this order 

// so we reverse the parameter 

myMap.forEach((value,key)=>{
    console.log(`key:- ${key} , value:- ${value}`)
})


// WeakSet 

// We cannot iterate 
// only store objects

let weakSet = new WeakSet()

// weakSet.add(1)  Invalid VAlue 

var Obj = {"name":"Lion"}
var Obj1 = {}

weakSet.add(Obj)
weakSet.add(Obj1)

console.log(weakSet)


// WeakMap

// WeakMap is a map that can only store objects


let weakMap = new WeakMap()

var Obj3 = {"name":"Ajay"}
var Obj4 = {}

weakMap.set(Obj3,"Private")
weakMap.set(Obj4,"Private data")

console.log(weakMap.has(Obj3))