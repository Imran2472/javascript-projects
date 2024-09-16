let Year = document.querySelector(".year")
let Days = document.querySelector(".days")
let Hours = document.querySelector(".hours")
let Minute = document.querySelector(".minute")
let seconds = document.querySelector(".seconds")

let CurrentYear = new Date().getFullYear();
let NextYear = CurrentYear + 1;



function RenderDate() {
    let CurrentDate = new Date()
    let NewYearDate = new Date(`january 01 ${NextYear} 00: 00: 00`)
    let TotalSeconds = (NewYearDate - CurrentDate) / 1000;

    let DaysLeft = Math.floor(TotalSeconds / 3600 / 24);
    let HoursLeft = Math.floor(TotalSeconds / 3600) % 24;
    let MinutesLeft = Math.floor(TotalSeconds / 60) % 60;
    let secondssLeft = Math.floor(TotalSeconds) % 60;

    Days.innerHTML = DaysLeft;
    Hours.innerHTML = HoursLeft;
    Minute.innerHTML = MinutesLeft;
    seconds.innerHTML = secondssLeft;
}


function Interval() {
    setInterval(()=>{
        RenderDate()
    },1000)
}
Interval() 