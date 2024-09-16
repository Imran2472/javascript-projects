let cartBtn = document.querySelector(".shop-icon")
let cartMain = document.querySelector("#cart")
let closeBtn = document.querySelector(".close")
let header = document.querySelector(".header")
let PreScrollPos = window.pageYOffset;
cartBtn.addEventListener("click", function(){
    cartMain.classList.add("show")
})
closeBtn.addEventListener("click", function(){
    cartMain.classList.remove("show")
})
window.addEventListener("scroll", function(){
    let CurrentScrollPos = window.pageYOffset;
    if(PreScrollPos < CurrentScrollPos){
        header.classList.add("hide")
    }else{
        header.classList.remove("hide")

    }
    PreScrollPos = CurrentScrollPos;
})
// working on addto cart 
if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}

// making function 
function ready() {
    //remove cart item
    let removeCartBtn = document.querySelectorAll(".delet")
    for(let i = 0; i < removeCartBtn.length; i++){
        let Btn = removeCartBtn[i];
        Btn.addEventListener('click', removeItemToCart)
    }
    // quantity chnage 
    let quantity = document.querySelectorAll(".quantity")
    quantity.forEach(element => {
        element.addEventListener("change", QuantityChange)
    });
    // add to cart work 
    let AddToCart = document.querySelectorAll(".addtocart")
    AddToCart.forEach(cart =>{
        cart.addEventListener("click", AddToCartFun)
    })
    
    loadSavedItemCart()
    SavedItem()
}
// remove item function 
function removeItemToCart(event) {
    let buttonClick = event.target;
    buttonClick.parentElement.parentElement.remove();
    UpdateTotal()
    SavedItem()
}
// QuantityChange funtion 
function QuantityChange(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    UpdateTotal()
    SavedItem()
}
// AddToCartFun 
function AddToCartFun(event) {
    let button = event.target;
    let ShopProduct = button.parentElement.parentElement.parentElement;
    let title = ShopProduct.querySelector(".heading_product").innerText;
    let price = ShopProduct.querySelector(".price_product").innerText;
    let ProImg = ShopProduct.querySelector(".productimg").src;
    addProductToCart(title, price, ProImg)
    UpdateTotal()
    SavedItem()
}
function addProductToCart(title, price, ProImg) {
    let ProductBox = document.createElement("div")
    ProductBox.classList.add("cart-box")
    let ProductParent = document.querySelector(".cart-main")
    let CreatItemName = ProductParent.querySelectorAll(".cart-title")
    for(let i = 0; i < CreatItemName.length; i++){
        let itemTile = CreatItemName[i]
        if(itemTile.innerText == title){
            alert("you have alerady added this item to the card")
            return;
        }
    }

    let cartBoxContent = `
    <div class="image"><img src="${ProImg}" alt="" class="cartImg" /></div>
    <div class="info">
        <h2 class="cart-title">${title}</h2>
        <div class="price cart-price">${price}</div>
        <input type="number" class="quantity cart-quantity" placeholder="1" value="1" onclick="QuantityChange(event)">
    </div>
    <div class="delet" onclick="removeItemToCart(event)"><i class="fa fa-solid fa-trash"></i></div>
    `
    ProductBox.innerHTML = cartBoxContent;
    ProductParent.append(ProductBox)
    ProductBox.getElementsByClassName("cart-quantity")[0].addEventListener("chnage", QuantityChange)
    ProductBox.getElementsByClassName("delet")[0].addEventListener("click", removeItemToCart)
    SavedItem()
    cartBtn.click()
}

// update total function 
function UpdateTotal() {
    let cartContent = document.querySelector(".cart-main")
    let cartboxes = cartContent.querySelectorAll(".cart-box")
    let total = 0;
    for(let i = 0; i < cartboxes.length; i++){
        let boxes = cartboxes[i]
        let priceElement = boxes.querySelector(".cart-price")
        let pricequantity = boxes.querySelector(".cart-quantity")
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = pricequantity.value;
        total += price * quantity;
       
    }
    let priceTotal = document.querySelector(".total");
       // if price contain same cents 
       total = Math.round(total * 100) / 100;
       priceTotal.innerHTML = "$" + total;
       //saved total to loaclstorage
       localStorage.setItem("cartTotal", total)
}

// keep item in cart 
function SavedItem(){
    let CartSavedCon = document.querySelector(".cart-main");
    let SavedBoxes = CartSavedCon.querySelectorAll(".cart-box");
    let CartItemsSavedArry = [];
    for(let i = 0; i < SavedBoxes.length; i++){
      let savedBox = SavedBoxes[i]
      let titleElement = savedBox.querySelector(".cart-title")
      let priceElement = savedBox.querySelector(".cart-price")
      let QuantityElement = savedBox.querySelector(".cart-quantity")
      let ImgElement = savedBox.querySelector(".image img").src
        let itemObj = {
            title : titleElement.innerText,
            price: priceElement.innerText,
            quantity: QuantityElement.value,
            ProImg : ImgElement,
        };
        CartItemsSavedArry.push(itemObj)
    }
    localStorage.setItem("CartItemsSavedArry", JSON.stringify(CartItemsSavedArry));
}

// loads in carts 
function loadSavedItemCart(){
    let CartItemsSavedArry = localStorage.getItem("CartItemsSavedArry");
    if(CartItemsSavedArry){
        CartItemsSavedArry = JSON.parse(CartItemsSavedArry);

        for(let i = 0; i < CartItemsSavedArry.length; i++){
            let item = CartItemsSavedArry[i]
            addProductToCart(item.title, item.price, item.ProImg);
            let CartBoxes = document.querySelectorAll(".cart-box")
            let CartBox = CartBoxes[CartBoxes.length -1];
            let QuantSaved = CartBox.querySelector(".cart-quantity");
            QuantSaved.value = item.quantity;
        }
    }
    let CartTotal = localStorage.getItem("cartTotal")
    if(CartTotal){
        document.querySelector(".total").innerText = "$" + CartTotal;
    };
}

