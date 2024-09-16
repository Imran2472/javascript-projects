let cardineer = document.querySelector(".card-ineer")
let imgview = document.querySelector(".img-sec")
let myfile = document.querySelector("#myfile")
let Img = document.querySelector(".popimg")
let filename = document.querySelector(".filename")
let popup = document.querySelector(".popup")
let buttonclose = document.querySelector(".buttonclose")
let NameOnlyCode = /[0-9a-za-z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/;
imgview.addEventListener("click", function(){
    myfile.click();
})

myfile.addEventListener("change", function(){
    let imgUrl = this.files[0]
   if(imgUrl.size < 2000000){
    if(imgUrl){
        let reader = new FileReader();
        reader.onload = function(){
            let result = reader.result;
            Img.src = result;
            cardineer.classList.add("active")
        }
        reader.readAsDataURL(imgUrl)
    }
    if(this.value){
        let valueFile = this.value;
        filename.textContent = valueFile.match(NameOnlyCode)
    }
   }
   else{
    popup.classList.add('active')
   }
})

buttonclose.addEventListener("click", function(){
    popup.classList.remove('active')

})

let buttonLoader = document.querySelector(".btn-with")

buttonLoader.addEventListener("click", function(){
    buttonLoader.innerHTML = " <div class='loader'></div>"
    
    setTimeout(()=>{
        buttonLoader.innerHTML = "image saved"
        buttonLoader.style.pointerEvents = "none"
    }, 2000)
})