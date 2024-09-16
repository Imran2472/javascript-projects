let popUpCart = document.querySelector("#cart-wrapper");
let CartOpenBtn = document.querySelector(".cart"); 
let CloseCart = document.querySelector(".close");
let itemcard = document.querySelector(".card")
let row = document.querySelector(".products-row");
let quantity = document.querySelector(".quantity")
let total = document.querySelector(".total")
let tasrh = document.querySelector(".trash")

CartOpenBtn.addEventListener("click", function(){
    popUpCart.classList.add("active")
})
CloseCart.addEventListener("click", function(){
    popUpCart.classList.remove("active")
})
let products = [
    {
        id : 1,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 1",
        image: "1.jpg",
        price : 2000
    },
    {
        id : 2,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 2",
        image: "2.jpg",
        price : 1000
    },
    {
        id : 3,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 3",
        image: "3.jpg",
        price : 3000
    },
    {
        id : 4,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 4",
        image: "4.jpg",
        price : 2000
    },
    {
        id : 5,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 5",
        image: "5.jpg",
        price : 2500
    },
    {
        id : 6,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 6",
        image: "6.jpg",
        price : 2300
    },
    {
        id : 7,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 7",
        image: "7.jpg",
        price : 2400
    },
    {
        id : 8,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 8",
        image: "77.jpg",
        price : 2090
    },
    {
        id : 9,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 9",
        image: "11.jpg",
        price : 2000
    },
    {
        id : 10,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 10",
        image: "22.jpg",
        price : 2200
    },
    {
        id : 11,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 11",
        image: "33.jpg",
        price : 2010
    },
    {
        id : 12,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 12",
        image: "44.jpg",
        price : 2000
    },
    {
        id : 13,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 13",
        image: "55.jpg",
        price : 2000
    },
    {
        id : 14,
        pera : "this is new item buy and enjoy of this beautifull products",
        name : "products 14",
        image: "66.jpg",
        price : 2000
    },
];
let cardArr = [];

function initpp() {
    products.forEach((value, key) => {
        let cartproduct = document.createElement("div")
        cartproduct.classList.add("col-md-3");
        cartproduct.innerHTML = `
        <div class="card">
        <img src="images/${value.image}">
        <div class="title">${value.name}</div>
        <div class="pera">${value.pera}</div>
        <div class="price">${"$" + value.price}</div>
        <div class="buton"><button class="btn btn-primary" onclick="addcart(${key})">add to cart</button></div>
        </div>
        `
        row.appendChild(cartproduct);
    });
}initpp();

function addcart(key) {
    if(cardArr[key] == null){
        cardArr[key] = JSON.parse(JSON.stringify(products[key]));
        cardArr[key].quantity = 1;
    }
    reloadcart();
    
}
function reloadcart() {
    itemcard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    cardArr.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity


        if(value != null){
            let addcartdiv = document.createElement("div")
            addcartdiv.classList.add("item")
            addcartdiv.innerHTML = `
            <div class="image"><img src="images/${value.image}" alt=""></div>
            <div class="disc">
            <div class="title">${value.name}</div>
            <span class="price">${value.price.toLocaleString()}</span>
            </div>
            <div class="increase-dis">
            <div class="increase" onclick="changeQuantity(${key}, ${value.quantity -1})"><i class="fa-solid fa-minus"></i></div>
            <div class="number">${value.quantity}</div>
            <div class="dicrease"  onclick="changeQuantity(${key}, ${value.quantity + 1})"><i class="fa-solid fa-plus"></i></div>
            </div>
            <div class="trash" onclick="removeCardt(${key})">
            <i class="fa-solid fa-trash"></i>
            </div>
            `;
            itemcard.appendChild(addcartdiv);
        }
        total.innerHTML = totalPrice.toLocaleString();
        quantity.innerHTML = count;
    })
    CartOpenBtn.click();
}

function changeQuantity(key, quantity) {
    if(quantity == 0){
        delete cardArr[key]
    }else{
        cardArr[key].quantity = quantity;
        cardArr[key].price = quantity * products[key].price;
    }
    reloadcart()
}
function removeCardt(key) {
    delete cardArr[key];
    reloadcart()
}
