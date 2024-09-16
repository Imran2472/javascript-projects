let Btns = document.querySelectorAll(".btnn");
let ResetBtn = document.querySelector(".rest");
let NewGame = document.querySelector(".new-game");
let winCon = document.querySelector(".win")
let msg = document.querySelector(".msg")
let turnO = true;

let WinnerTrac = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,2,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
];

const ResetGame = () =>{
    turnO = true;
    EnabledBtn();
    msg.classList.remove("show");

}

Btns.forEach((btn)=>{
    btn.addEventListener("click", function(){
        console.log("box was clicked")
       if(turnO){
        btn.innerText = "O";
        turnO = false;
    }else{
        btn.innerText = "X";
        turnO = true;
    }
    btn.disabled = true;
    CheckWinner();
    })
})

const disabledBtn = () =>{
    Btns.forEach(btn =>{
        btn.disabled = true;
    })
}
const EnabledBtn = () =>{
    Btns.forEach(btn =>{
        btn.disabled = false;
        btn.innerText = "";
    })
}

const ShowWinner = (value) =>{
    msg.classList.add("show");
    winCon.innerText = value;
    disabledBtn();
}

const CheckWinner = () =>{
    for(let Pattern of WinnerTrac){
    //    console.log(Pattern[0],Pattern[1],Pattern[2]);
    //    console.log(Btns[Pattern[0]].innerText,Btns[Pattern[1]].innerText,Btns[Pattern[2]].innerText);

       let Posi1Val = Btns[Pattern[0]].innerText;
       let Posi2Val = Btns[Pattern[1]].innerText;
       let Posi3Val = Btns[Pattern[2]].innerText;

       if(Posi1Val != "" && Posi2Val != "" && Posi3Val != ""){
        if(Posi1Val === Posi2Val && Posi2Val === Posi3Val){
           ShowWinner(Posi1Val)
        }
       }
    }
}

ResetBtn.addEventListener("click", ResetGame)
NewGame.addEventListener("click", ResetGame)