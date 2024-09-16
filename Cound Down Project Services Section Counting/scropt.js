let valuedisplay = document.querySelectorAll('.count-down')
let interval = 250;

valuedisplay.forEach((valuedisplay) => {
   let startValue = 0;
   let endValue = parseInt(valuedisplay.getAttribute('data-val'));
   let duration = Math.floor(interval /  endValue);
   console.log(duration)
   let counter = setInterval(function(){
    startValue += 20;
    valuedisplay.textContent = startValue;
    if(startValue == endValue){
        clearInterval(counter);
    }
   }, duration)
});