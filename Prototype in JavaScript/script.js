// Object creating By Different Methods


// const obj = new Object({
//     name:"Soham"
// })

// const obj1 = new Obj();

// const obj2 = {
//     name:"Soham Roy"
// }


// Proto and Inheritence in JavaScript 

const obj = {
    name:"Soham Roy",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll
    }
}
// console.log(obj)


const obj1 = {
    roll:1,name:"Tuhin",
    __proto__:obj
}

// console.log(obj1.getRoll())

const obj2 = {
    class:"B-Tech",
    __proto__:obj1
}

// console.log(obj2.getName())
 
const arr = ["Ajay"];
console.log(arr)


const object = new Object()
console.log(object)

const array = new Array()
console.log(array)

// const func = new Function()
// console.log(func)


// Creating our Own Objects


Array.prototype.show = function(){
    return this
}
const cities = ["West Bengal"]
console.log(cities)

Array.prototype.convertIntoObject = function(){
    let obj = {}
    this.forEach(e=>{
        obj[e] = e
    })
    return obj;
}

console.log(cities.convertIntoObject())


class MyPrototype {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
MyPrototype.prototype = obj
const myproto = new MyPrototype("Ami","23")
console.log(myproto.getName(),myproto.getRoll())