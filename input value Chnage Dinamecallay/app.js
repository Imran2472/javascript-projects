let InputCalcius = document.querySelector("#Calcius")
let InputFahrenheit = document.querySelector("#Fahrenheit")
let InputKalvin = document.querySelector("#Kalvin");

InputCalcius.addEventListener("input", function(){
    let c = parseFloat(InputCalcius.value.trim());
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    InputFahrenheit.value = f.toFixed(2);
    InputKalvin.value = k.toFixed(2);
})
InputFahrenheit.addEventListener("input", function(){
    let f = parseFloat(InputFahrenheit.value.trim());
    let c = (f - 32) * 5 / 9;
    let k = (f - 32) * 5 / 9 + 273.15;
    InputCalcius.value = c.toFixed(2);
    InputKalvin.value = k.toFixed(2);
})
InputKalvin.addEventListener("input", function(){
    let k = parseFloat(InputCalcius.value.trim());
    let c = c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    InputFahrenheit.value = f.toFixed(2);
    InputCalcius.value = c.toFixed(2);
})