let span = document.querySelectorAll(".text span");

span.forEach((spn)=>{
    spn.addEventListener("click", function(){
        spn.classList.toggle("active")
    })
})