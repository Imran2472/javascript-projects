let button =  document.querySelectorAll('.buttons')
let col =  document.querySelectorAll('.col-md-4');






button.forEach((btn) =>{
    btn.addEventListener('click', function(){
        button.forEach(btn =>{btn.classList.remove('active')})
        btn.classList.add('active')  
    
        col.forEach((crad) =>{
            if(crad.classList.contains(btn.id)){
              crad.style.display = 'block';
            }
            else{
              crad.style.display = 'none';
      
            }
          })
    })
})

