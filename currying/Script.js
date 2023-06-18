// Currying function in javaScript

// function addition(a,b,c){
//     return a+b+c
// }

// let res =addition(2,3,4);
// console.log(res);



// function Addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// let res =Addition(2);
// let data = res(4)
// let data1 = data(7)
// console.log(data1);

// Use as Currying 

// let res1 = Addition(2)(4)(6)
// console.log(res1)


// Real Live Examples

userObj = {
    name : "John",
    age: 24
}

function userInfo(Obj){
    return function(userInfo){
        return Obj[userInfo];
    }
}

let res = userInfo(userObj)
console.log(res('name'))