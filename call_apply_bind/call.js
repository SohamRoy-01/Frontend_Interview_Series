// Apply,call & Bind

// Problem

// let UserDetails = {
//     name:"Soham Roy",
//     Age:23,
//     Designation:"Software Engineer",
//     printDetails:function(){
//         console.log(this.name)
//     }
// }

// UserDetails.printDetails();

let userDetails = {
    name:"Soham Roy",
    Age:23,
    Designation:"Software Engineer",
   
}

let  printDetails= function(state){
    console.log(this.name+" "+state)
}

printDetails.call(userDetails,"Delhi")

let userDetails1 = {
    name:"Tuhin Roy",
    Age:24,
    Designation:"Software Engineer",
}

// function borrowing

// userDetails.printDetails.call(userDetails1);

printDetails.call(userDetails1,"Delhi")

