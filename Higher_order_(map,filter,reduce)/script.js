// Higher Order Functions

// forEach 
// filter
// map
// reduce
// sort

const companies = [ 
    {name: "Google",category: "Product Based",start:1981,end:2004},
    {name: "Paytm" ,category: "Product Based",start:1992,end:2008},
    {name: "Amazon" ,category: "Product Based",start:1999,end:2010},
    {name: "Mindtree" ,category: "Service Based",start:1997,end:2012}
]

const ages = [33,23,12,17,16,5,21,54,44,61,13,15,45,64,32]

// forEach

// normal loop

// for (let i = 0; i <= companies.length; i++) {
//    console.log(companies[i])
// }


// Normal function

// companies.forEach(function(company,index){
// console.log(company,index)
// })


// Arrow Function 

companies.forEach((company,index)=>console.log(company))


// filter

// normal loop
for (let i = 0; i <= ages.length; i++) {
    if (ages[i]>=20) {
        console.log(ages[i])
    }
    
}

// const age = ages.filter(function(age){
//     if(age>=20){
//         return true
//     }
// })

// console.log(age)

// Arrow Function

const age = ages.filter(age=> age>=20)
console.log(age)

const companyFilter = companies.filter(company=>company.category==="Service Based")
console.log(...companyFilter)


//map Function 
const map = companies.map((company,index)=>{
    // console.log(company,index)
    return `${company.name}  ${company.category} ${company.start} ${company.end}`
})
    

console.log(map)

// Sort
// const sorted = companies.sort((c1,c2)=>c2.start - c1.start)
const sorted = companies.sort((c1,c2)=>c1.start > c2.start ? 1 : -1)

console.log(...sorted)

const sortedAges = ages.sort((a,b)=>a-b)

console.log(sortedAges)


// reduce

let sum = 0;

ages.forEach(element => {
    sum+=element;
});

console.log(sum)

// const sumAge= ages.reduce(function(total,age){
//     return total+age;
// },0)

// console.log(sumAge)

const sumAge= ages.reduce((total,age)=>total+age
,0)

console.log(sumAge)