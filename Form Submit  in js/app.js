let Password = document.querySelector(".password");
let Password1 = document.querySelector(".password1");
let SubmitBtn = document.querySelector(".Submit")
let form = document.querySelector("form")
// console.log(Password)
let Wrn = document.querySelector(".wrn-alert")
form.addEventListener("submit", function(e){
    e.preventDefault()
    SamePassword();
})

function SamePassword(){
    

        if(Password.value === Password1.value){
            Wrn.style.display = "block";
            Wrn.innerHTML = "Successfully Login!";
            Wrn.classList.add("alert-success")
            window.location.href = "index.html"
        }else{
            Wrn.style.display = "block";
            Wrn.innerHTML = "your Password does Not Match!";
            Wrn.classList.add("alert-danger")
        }
 
    
}