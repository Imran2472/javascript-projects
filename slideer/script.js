let SlideCol = document.querySelectorAll('.col')
let SlideBtns = document.querySelectorAll('.btns')
let CurrentSlide = 1;

let MenualSlide = (manual) =>{
    
    
    SlideCol.forEach((slide) =>{
        slide.classList.remove('active')
        
        SlideBtns.forEach((btn) =>{btn.classList.remove('active')});
        
    });
    
    SlideCol[manual].classList.add('active')
    SlideBtns[manual].classList.add('active')

}

SlideBtns.forEach((btn, i)=>{
    btn.addEventListener('click', function(){
        MenualSlide(i)
        CurrentSlide = i;
    })
})

let AutoPlay =  (activeClass) =>{
    let active = document.getElementsByClassName('active')
    let i = 1;

    let AutoPlayRepeat = () =>{
        setTimeout(() => {

            [...active].forEach((active) =>{
                active.classList.remove('active')
            })
            SlideCol[i].classList.add('active')
            SlideBtns[i].classList.add('active')
            i++;
    
            if(SlideCol.length == i){
                i = 0;
            }
            if(i >= SlideCol.length){
                return;
            }
            
                AutoPlayRepeat();
        }, 5000);
    }
    AutoPlayRepeat();
}
AutoPlay();