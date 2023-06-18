// Event Bubbling & Capturing
// Stop Propagation , Immediate Propagation & Prevent Default

var div = document.querySelector("div")
var button = document.querySelector("button")
var a = document.querySelector("a")


// Bubbling 

// div.addEventListener("click",()=>{
//     console.log("div clicked")
// })
// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// })


// Capturing 

// div.addEventListener("click",()=>{
//     console.log("div clicked")
// },true)
// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// },true)


// Stop Propagation 

// div.addEventListener("click",()=>{
//     console.log("div clicked")
// })
// button.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("Button clicked")
// })

// Immediate Propagation

// button.addEventListener("click",(e)=>{
//     console.log("Button clicked 1")
// })
// button.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation();
//     console.log("Button clicked 2")
// })


// Prevent default

a.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Button clicked 1")
})
// a.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation();
//     console.log("Button clicked 2")
// })
