let button = document.querySelector('button');
let body = document.querySelector('body')
button.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = '#' + randomNumber.toString(16);
    body.style.background = randomCode;

    let colorCode = document.querySelector('.color_code')
    colorCode.innerText = randomCode; 


        navigator.clipboard.writeText(randomCode);
})