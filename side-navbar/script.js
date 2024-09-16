let button = document.querySelectorAll('.button')
let items = document.querySelectorAll('.items')

button.forEach((btn) =>{
    btn.addEventListener('click', function(){
        button.forEach((btn) =>{btn.classList.remove('active')})
        btn.classList.add('active')


        items.forEach((section) =>{
            if(section.classList.contains(btn.id)){
               section.classList.add('show')
            }else{
                section.classList.remove('show');
            }
        })



    })
})