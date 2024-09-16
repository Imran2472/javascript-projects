let question = document.querySelectorAll(".question_box")


question.forEach((que) =>{
 
      que.addEventListener('click', () =>{
        let isActive = que.classList.contains('active');

        question.forEach((el) =>{
            el.classList.remove('active')
        })

        if(isActive > 0) {
            que.classList.remove('active')
        }
        else{
            que.classList.add('active')
        }

      });
});