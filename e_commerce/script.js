let navbar = document.querySelector("#navbar")


window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        navbar.classList.add("active")
    }else{
        navbar.classList.remove("active")
    }
})


let btnCart = document.querySelector("#cart-btn")
let cartPopup = document.querySelector("#cart")
let trash = document.querySelector(".cart_close")

btnCart.addEventListener("click", function(){
    cartPopup.classList.add("active")
})
trash.addEventListener("click", function(){
    cartPopup.classList.remove("active")
})

let addTOCart = document.querySelectorAll(".buttonss");

let CartArryAdd = [];
addTOCart.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        let parentElement = btn.parentElement.parentElement;
        let product = {
            id : parentElement.querySelector(".quantity").value,
            Name : parentElement.querySelector(".card-title").innerText,
            Price : parentElement.querySelector(".product_price").innerText.replace("$", "") ,
            imageSrc : parentElement.querySelector(".card-img-top").getAttribute("src"),
            Quantity : 1
        }
        let isInCart = CartArryAdd.filter(item => item.Name === product.Name).length > 0;
        if(! isInCart){
            addItemToTheDom(product)
        }
        else{
            alert("product alerady in the Cart")
            return;
        }


        CartArryAdd.push(product)
        CalculateTotal();
    })
})
let cartItem = document.querySelector(".col_cart_content")
function addItemToTheDom(product) {
    cartItem.insertAdjacentHTML("afterbegin", `
    <div class="img_cart"><img src="${product.imageSrc}" alt=""></div>
    <div class="text_cart">
        <h6>${product.Name}</h6>
        <input type="number" value="${product.id}">
        <div class="cart-price">${product.Price}</div>
    </div>
    <div class="trash">
        <ion-icon name="trash-outline" class="removeicon"></ion-icon>
    </div>
    `)

    let trash = cartItem.querySelector(".removeicon")
        trash.addEventListener("click", () =>{
            RemoveItemFromCart()
        })
    

    
}

let TotalCounter = document.querySelector(".cart_counter")
let TotalCost = document.querySelector("#total_cart")
function CalculateTotal() {
    let total = 0;
    CartArryAdd.forEach( item =>{
        total += item.Price * item.Quantity;
        console.log(total)
    });

    TotalCost.innerText = total;
    TotalCounter.innerText = CartArryAdd.length
 
   
}

function RemoveItemFromCart () {
    cartItem.innerHTML = ''
    CalculateTotal()
}