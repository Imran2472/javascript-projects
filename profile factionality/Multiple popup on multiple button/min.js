let buttons = document.querySelectorAll(".show-popup")
let popups = document.querySelectorAll(".web-deve")
let closebtn = document.querySelectorAll(".close-popup")

buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault()
        let data = btn.getAttribute("data-filter")
        popups.forEach(pop =>{
            console.log(pop.id)
            if(data === pop.id){
                pop.classList.add("show")
            }else{
                pop.classList.remove("show")
            }
        })
    })
})

closebtn.forEach(close=>{
    close.addEventListener("click", function(){
        popups.forEach(pop=>{
            pop.classList.remove("show")
        })
    })
})