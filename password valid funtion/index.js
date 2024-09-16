let eye = document.querySelector(".eye i");
let password = document.querySelector(".inputs");
let masg = document.querySelector(".masg")
eye.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text";
        eye.classList.replace("fa-eye-slash", "fa-eye")
    }else{
        password.type = "password";
        eye.classList.replace("fa-eye", "fa-eye-slash")
    }
})

password.addEventListener("input", function(){
    let passwordValue = password.value;

    if(passwordValue.length < 8){
        masg.innerHTML = "Password is to Short";
        masg.style.color = "red";
    }else{

        if(passwordValue.search(/[a-z]/) == -1){
            masg.innerHTML = "password is missing a lower case letter"
            masg.style.color = "red";
        }
        else if(passwordValue.search(/[A-Z]/) == -1){
            masg.innerHTML = "password is missing a upper case letter"
            masg.style.color = "red";
        }
        else if(passwordValue.search(/[0-9]/) == -1){
            masg.innerHTML = "password is missing a number letter"
        masg.style.color = "red";

        }
        else if(passwordValue.search(/[!\@\#\$\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\;'\,.]/) == -1){
            masg.innerHTML = "password is missing a numeric letter"
        masg.style.color = "red";

        }
        else{
            masg.innerHTML = "Password is to Large & Enough";
            masg.style.color = "green";
        }
    }
})