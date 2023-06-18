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

let  printDetails= function(state,country){
    console.log(this.name+" "+state+" "+country)
}

printDetails.call(userDetails,"Delhi","India")

let userDetails1 = {
    name:"Tuhin Roy",
    Age:24,
    Designation:"Software Engineer",
}

// function borrowing

printDetails.apply(userDetails1,["Delhi","India"])

