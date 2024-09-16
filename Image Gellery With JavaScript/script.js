
let images =  document.querySelectorAll('.images');
let span = document.querySelector('.exite')

images.forEach((image) =>{
    image.addEventListener('click', function(){
       CallImage();
    })

    let CallImage = () =>{
        let popUP = document.querySelector('.popup')
        popUP.classList.add('active')
        
        let PopupImages = document.querySelector('.popupimg')
        
        PopupImages.src = image.getAttribute('src');
    }
    
    let prevNext = document.querySelector('.prev-next')
    let Next = document.querySelector('.next')
    let NewIndex = image.length;
// console.log(NewIndex)
    prevNext.addEventListener('click', function(){
        NewIndex--;
    })
    
    Next.addEventListener('click', function(){
        NewIndex++;
    })
})
images.forEach((image) =>{
    span.addEventListener('click', function(){
        let popUP = document.querySelector('.popup')
        popUP.classList.remove('active')

    })
})





// let images = document.querySelectorAll('.col-md-3 .card .images');
// let Close = document.querySelector('.exite');
// let popUP = document.querySelector('.popup');

//     for(let i = 0; i < images.length; i++)
//     {
//         let NewIndex = i;
//         images[i].addEventListener('click', function(){
//             popUP.classList.add('active')
//             preView();
//             console.log(NewIndex)
//         })

//         function preView(){
//             let popUpImg = document.querySelector('.popupimg');
//             popUpImg.src = images[NewIndex].getAttribute('src');
            
//         }

//         let PrevBtn = document.querySelector('.prev-next')
//         let NextBtn = document.querySelector('.next')
//         PrevBtn.addEventListener('click', function(){
//             NewIndex--;
//             if(NewIndex == 0){
//                 preView();
//                 PrevBtn.style.display = 'none';
//             }else{
//                 PrevBtn.style.display = 'block';
//                 preView();

//             }
//         })
//         NextBtn.addEventListener('click', function(){
//             NewIndex++;
//             if(NewIndex >= images.length){
//                 preView();
//                 PrevBtn.style.display = 'none';
//             }else{
//                 PrevBtn.style.display = 'block';
//                 preView();

//             }
//         })
    

//         Close.addEventListener('click', function(){
//             popUP.classList.remove('active')
//         })
//     }

