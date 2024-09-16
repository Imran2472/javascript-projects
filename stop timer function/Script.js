let [meliseconds, seconds, minutes, hours] = [0,0,0,0];
let Init = null;
let TImeDisplayTag = document.querySelector(".timer_display");
let StartBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let resetBtn = document.querySelector(".reset");

StartBtn.addEventListener("click", displayTime);
pauseBtn.addEventListener("click", () =>{
    clearInterval(Init)
});

resetBtn.addEventListener("click",  () =>{
    clearInterval(Init);
    [meliseconds, seconds, minutes, hours] = [0,0,0,0];
  TImeDisplayTag.innerHTML = "00 : 00 : 00 : 000"
});

function displayTime() {
        if(Init !== null){
            clearInterval(Init)
        }
        Init = setInterval(displayTimeFunction, 10 );
    
}

function displayTimeFunction () {
    meliseconds += 10;
    if(meliseconds == 1000){
        meliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++
            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    let ms = meliseconds < 10 ? "00" + meliseconds : meliseconds < 100 ? "0" +meliseconds : meliseconds;

    TImeDisplayTag.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}

