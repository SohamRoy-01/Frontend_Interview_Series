//  1st  ex as a Event Delegation  


// document.querySelector("#categories").addEventListener('click',(e)=> {
//     console.log(e.target.id)
//     if (e.target.tagName - "LI")
//     window.location.href = "/" + e.target.id
// })


// 2nd  ex as a Event Delegation Behaviour Pattern

document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log(e)
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})