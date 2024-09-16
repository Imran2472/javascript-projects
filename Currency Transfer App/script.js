let URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let Select = document.querySelectorAll(".content select");
let ExchnageBtn = document.querySelector("#Exchange");
let fromCurr = document.querySelector(".from .content select");
let toCurr = document.querySelector(".to .content select");
let msg =  document.querySelector(".final-amount")


window.addEventListener("load", function(){
    GetExchangeRate();
})

Select.forEach((select)=>{
    for(Currcode in countryList){
        let NewOption = document.createElement("option");
        NewOption.innerText = Currcode;
        NewOption.value = Currcode;
        select.append(NewOption);
        if(select.name === "form" && Currcode === "USD"){
            NewOption.selected = "selected"
        }
        if(select.name === "to" && Currcode === "PKR"){
            NewOption.selected = "selected"
        }
    }
    select.addEventListener("change", function(e){
        UpdateFlag(e.target);
    })
})


const UpdateFlag = (element) =>{
    let EleValue = element.value;
    let NewCode = countryList[EleValue];
    let NewFlagCode = `https://flagsapi.com/${NewCode}/flat/64.png`;
    let Img = element.parentElement.querySelector("img");
    Img.src = NewFlagCode
};


ExchnageBtn.addEventListener("click",  function(e){
    e.preventDefault();
    GetExchangeRate();
})

const GetExchangeRate = async () =>{
    let Input = document.querySelector("#amount-input");
    let AmountVal = Input.value;
    if(AmountVal === "" || AmountVal < 1){
        AmountVal = 1;
        Input.value = "1";
    }
    // console.log(fromCurr.value, toCurr.value)
    let ExchangeUrl = `${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let Respons = await fetch(ExchangeUrl)
    let data = await Respons.json();
    let rate = await data[toCurr.value.toLowerCase()];
    let finalRate = AmountVal * rate;
    msg.innerHTML = `${AmountVal} ${fromCurr.value} = ${finalRate.toFixed(2)} ${toCurr.value}`
}