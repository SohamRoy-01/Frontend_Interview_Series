// Async Js PRogramming

// Callbacks, Promises , Async & Await

const data = [
  { name: "Ajay", Profession: "Software Engineer" },
  { name: "Anuj", Profession: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    data.forEach((datas, index) => {
      output += `<li>${datas.name}, ${datas.Profession}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// CallBack

// function createData(newData,Callbacks){
//     setTimeout(()=>{
//         data.push(newData)
//         Callbacks();
//     },2000)
// }

// createData({name:"Soham",Profession:"Software Engineer"},getDatas)


//Promises

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error=false;

      if(!error){
        resolve()
      }else{
        reject("Error")
      }
    }, 2000);
  });
}
// createData({ name: "Soham", Profession: "Software Engineer" })
// .then(getDatas)
// .catch(error=>console.log(error))


// async/await 

 async function start(){
  await createData({
    name: "Soham",
    Profession: "Software Engineer"
  })
  getDatas();
}

start();