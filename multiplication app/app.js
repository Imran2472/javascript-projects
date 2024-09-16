let Score = document.querySelector("#score");
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let input = document.querySelector("#inputs");
let submit = document.querySelector("#submit");
let masg = document.querySelector(".masg");
let Count = 0;


submit.addEventListener("click", ()=>{
    let val = input.value
    val = val.trim();
    val = Number(val)
    let mult = document.querySelector("#num1").textContent * document.querySelector("#num2").textContent;
    mult = Number(mult)
    if(document.querySelector("#inputs").value === ""){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Some Text Here...",
          });

    }else if(val === mult){
        masg.classList.add("right")
        masg.classList.remove("wrong")
        Count++
        masg.innerHTML =   `Congrats You Take it Right Your Score ${Count}`;
        Score.innerHTML = Count;
        num1.textContent = Math.floor(Math.random() * 10)
        num2.textContent = Math.floor(Math.random() * 10)
        input.value = "";
    }else{
        Count--;
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
        masg.classList.add("wrong")
        masg.classList.remove("right")
        Score.innerHTML = Count;
        masg.innerHTML =   `Wrong Answer ${Count}`;
    }
})

