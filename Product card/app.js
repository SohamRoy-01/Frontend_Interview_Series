let data =[];
let container = document.getElementById("Container");

fetch("https://fakestoreapi.com/products")
.then((result) =>{
    return result.json()
}).then((result)=>{
   data = result;
   data.forEach(element => {

    let colored_star = parseInt(element.rating.rate);
    let notColored_star = 5 - colored_star;
    // let tempDiv = document.createElement("div")

    let all_stars = document.createElement("div");
    all_stars.setAttribute("id","stars")
    all_stars.setAttribute("class","stars")

    

    for(let i=0;i<colored_star;i++){
        all_stars.innerHTML+=`<i class="fa-solid fa-star"></i>`
    }
    for(let i=0;i<notColored_star;i++){
        all_stars.innerHTML+=`<i class="fa-regular fa-star"></i>`
    }

    // tempDiv.appendChild(all_stars);

    container.innerHTML += `<div class="card">
    <img src=${element.image}  alt="img">
    <div class="details">
        <span class="Product_name">${element.title}</span>
        <span class="Mens_Clothing">${element.category}</span>
        ${all_stars.innerHTML}
        <div class="Rating_Count">
            Rating_Count :<span> ${element.rating.count}
            </span>
        </div>
    </div>
    <div class="btn">
        <button class="Buy">Buy Now</button>
    </div>
</div>`
   });
});

