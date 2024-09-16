let RowsData = document.querySelector(".row");
fetch('https://fakestoreapi.com/products').then((res)=>{
    let respons = res.json();
    return respons
}).then((Data)=>{
   ShowData(Data);
})

const ShowData = (Data) =>{
    let Products = "";
    Data.forEach(data => {
        Products += `
        <div class="col">
        <div class="card">
            <div class="title">${data.title}</div>
            <div class="image"><img src="${data.image}" alt=""></div>
            <div class="disc">${data.description}</div>
            <div class="price">$ ${data.price}</div>
            <div class="button my-2">
                <button class="btn btn-primary">add to card</button>
            </div>
        </div>
    </div>
        `;
        RowsData.innerHTML = Products;
    });
}