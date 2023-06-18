// ES6
// Rest And Spread Operator

//Ex Es6 

// Rest 

function addNumbers(a,b,c,...other){
    console.log(other)
    return a+b+c;

}

const res = addNumbers(2,5,6,7,8)
console.log(res)


// ex ES5

// function addNumbers(a,b,c,...other){
//     console.log(arguments)
//     return a+b+c;

// }

// const res = addNumbers(2,5,6,7,8)
// console.log(res)

// Spread

var names = ["Ajay","Soham","Vivek"]


function getNames(name1,name2,name3){   // receive
console.log(name1,name2,name3)
}

// getNames(names[0],names[1],names[2])
getNames(...names)  // Best
// getNames(names)

// Object ke sath -> Rest;

var students = {
    name:"Ajay",
    age:"20",
    hobbies:["Cricket","Singing"]
}

const {...rest} =students;  // array de structuring
console.log(rest)


// Object ke sath -> Spread;


var newStudents ={
    ... students,
    age:"29"
}

console.log(newStudents)