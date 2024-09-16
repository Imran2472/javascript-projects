let col = document.querySelectorAll('.col')
let body = document.querySelector('body')

col.forEach(function(col){
    col.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target = 'red') {
            body.style.backgroundColor = e.target.id;
        }
    })
})


let toggles = document.querySelector('.toggles')
let circle = document.querySelector('.circle')
let root = document.querySelector('root')
console.log(root)
toggles.addEventListener('click', function(){
   circle.classList.toggle('active')
   document.body.classList.toggle('dark-them')
})
 
    

