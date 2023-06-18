const myThrottle = (fn,d)=>{
    return function(...args){
        document.getElementById("myId").disabled =true
        setTimeout(()=>{
            fn();

        },d)
    }
}


const newFunc = myThrottle(()=>{
    document.getElementById("myId").disabled = false
    console.log("user Clicked")
},5000)