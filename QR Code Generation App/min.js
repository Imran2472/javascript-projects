let qrcodebody = document.querySelector(".qr-wrapper")
let qrImg = document.querySelector("#qr-img")
let buttons = document.querySelector(".buttons")
let inputss = document.querySelector("#inputss")

buttons.addEventListener("click", function(){
    let inpValu = inputss.value;
    if(!inpValu) return;
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpValu}`
    qrImg.addEventListener("load", function(){
        qrcodebody.classList.add("show")
    })
})