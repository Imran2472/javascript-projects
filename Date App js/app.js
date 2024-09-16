let Month = document.querySelector(".month")
let day = document.querySelector(".day")
let dateG = document.querySelector(".date")
console.log(date)
let year = document.querySelector(".year")

function GetDate() {
    let date = new Date();
    let Getmonth = date.toLocaleDateString("en-US", {month: "long"});
    let Getday = date.toLocaleDateString("en-US", {weekday: "long"});;
    let Getdate = date.getDate();
    let Getyesr = date.getFullYear();
    console.log(Getmonth, Getday, Getdate, Getyesr)
    Month.innerHTML = Getmonth;
    day.innerHTML = Getday;
    dateG.innerHTML = Getdate;
    year.innerHTML = Getyesr
}
GetDate()