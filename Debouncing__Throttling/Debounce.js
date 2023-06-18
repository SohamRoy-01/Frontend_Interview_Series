let counter=0

function getData(){
    console.log("fetching Data "+ counter++)
};   
function myDebounce(call,delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer =setTimeout(()=>{
            call();
        },delay) 
    }
}

const Better = myDebounce(getData,1000)