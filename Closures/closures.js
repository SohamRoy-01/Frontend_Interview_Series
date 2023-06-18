// Closures 

// var func = (a)=>{
//     console.log("Hello World"+" "+ a)

// var c = 4;
// return function (b){
//     return a+b+c
// }

// }
// var sumStore = func(2);  // calling

// console.log(sumStore(5))

var func = (a,b,c)=>{


    return {
    getSumTwo:function(){
        return a+b;
    },
    getSumThree:function(){
        return a+b+c;
    }
}

}
var store =func(2,3,4);  // calling
console.log(store.getSumTwo())
console.log(store.getSumThree())


var store1 =func(7,8,6);  // calling
console.log(store1.getSumTwo())
console.log(store1.getSumThree())

