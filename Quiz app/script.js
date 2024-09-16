let question = [
    {
        'que': 'which of the following is a markup language ?',
        'a': 'html',
        'b': 'javascript',
        'c': 'python',
        'd': 'css',
        'correct': 'a',
    },


    {
        'que': 'what year was javascript launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b',
    },


    {
        'que': 'what does css stands for ?',
        'a': 'hypertext markup language',
        'b': 'cascading style sheet',
        'c': 'jason object notation',
        'd': 'helicopters termonals moterboats lamborginis',
        'correct': 'b',
    },
]
 let index = 0;
 let total = question.length;
 let right = 0, wrong = 0;
let heading = document.querySelector('.heading');
let option = document.querySelectorAll('.option');
let LoadQuestion= () =>{
    if(index == total){
       return endQuiz();
    }
    reset();
    let data = question[index]
    heading.innerText = `${index + 1}) ${data.que}`;

    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
}



let SubmitQuiz = () =>{
    let data = question[index];
    let ans = getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }

    index++;
    LoadQuestion();
    return;

}

let getAnswer = () =>{
    let answer;
let option = document.querySelectorAll('.option');
option.forEach((input) =>{
    if(input.checked){
        answer = input.value;
        
    }
})
return answer;
}

let reset = () =>{
    option.forEach((input) =>{
      input.checked = false;
    })
}

let endQuiz = () =>{
    let col = document.querySelector('.card').innerHTML =  `<h2>Thank You For Playing The Quiz</h2>
                                                                                                <h1>${right} / ${total} are correct</h1>`;
}

LoadQuestion();