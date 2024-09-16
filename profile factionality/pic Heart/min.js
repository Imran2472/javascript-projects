let imgDiv = document.querySelector(".card")
// let heart = document.querySelector(".heart i")
let heartDiv = document.querySelector(".heart")

imgDiv.addEventListener("dblclick", function(e){
    let xvalue =  e.clientX - e.target.offsetLeft;
    let yvalue =  e.clientY - e.target.offsetTop;
    
    heartDiv.style.left = `${xvalue}px`
    heartDiv.style.top = `${yvalue}px`

    heartDiv.classList.add("active")

    setTimeout(()=>{
    heartDiv.classList.remove("active")
    },1000)
})