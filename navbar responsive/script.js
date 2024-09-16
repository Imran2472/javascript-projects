let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar')

bars.addEventListener('click', function(){
    bars.classList.toggle('active')
    navbar.classList.toggle('active')
})

let list = document.querySelector('.under_list');
let btn = document.querySelector('.dropdown');

btn.addEventListener('click', function(){
    list.classList.toggle('active')
})
let body = document.querySelector('.hero')
body.addEventListener('click', function(){
    list.classList.remove('active')
})