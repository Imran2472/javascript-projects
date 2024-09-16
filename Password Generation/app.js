let InputCount = document.querySelector("#Length");
let PrintInput = document.querySelector(".input_field");
let uppercase = document.querySelector("#Uppercase");
let lowercase = document.querySelector("#Lowercase");
let number = document.querySelector("#numbers");
let symbols = document.querySelector("#sybmols");
let CopyBtn = document.querySelector("#copy")
let submitBtn = document.querySelector("#submit");
let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerStr = "abcdefghijklmnopqrstuvwxyz";
let numberStr = "0123456789";
let symbstr = "!@#$%^&*()-+{}[]\;:'?.,<>;|/";

submitBtn.addEventListener("click", CheckValue)
CopyBtn.addEventListener("click", copytext)
let str = "";

function copytext(){
  if(PrintInput.value){
      //Get the text field
  let copyText = document.querySelector(".input_field");

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
   
  // Alert the copied text
  setTimeout(() => {
    CopyBtn.innerHTML = "copied"
  }, 2000);
  alert("Copied the text: " + copyText.value);
  }else{
    alert("Please Generate Password Frist")
  }
}


function CheckValue(){
    if(uppercase.checked) {
        str += upperStr;
    }
    if(lowercase.checked) {
        str += lowerStr;
    }
    if(number.checked) {
        str += numberStr;
    }
    if(symbols.checked) {
        str += symbstr;
    }
    let password = "";
    for(let i = 0; i < InputCount.value; i++){
        let index = Math.floor(Math.random() * str.length);
        password += str[index]
        PrintInput.value = password;
    }

    console.log(password)
}

