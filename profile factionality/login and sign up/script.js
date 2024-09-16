let eyePassword = document.querySelectorAll(".eye")
let password = document.querySelectorAll(".pass-eye")
let eyes = document.querySelectorAll(".eyes-icon")
eyePassword.forEach(btn=>{
    btn.addEventListener("click", function(){
      
        password.forEach(pass=>{

            if(pass.type == "password"){
                pass.type = "text"
               
            }else{
                pass.type = "password"
            }

        })

        
     eyes.forEach(eye =>{
        if(eye.classList.contains("fa-eye-slash")){
            eye.classList.replace("fa-eye-slash", "fa-eye")
        }else{
            eye.classList.replace("fa-eye", "fa-eye-slash")
        }
     })



    })
})

let dontacc = document.querySelectorAll(".dont-acc")
let singup = document.querySelector(".signup")
let login = document.querySelector(".login")
dontacc.forEach(buttonlog =>{
    buttonlog.addEventListener("click", function(){
        singup.classList.toggle("active")
        login.classList.toggle("active")
    })
})