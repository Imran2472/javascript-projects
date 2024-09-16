let buttonStart = document.querySelector('.button_start')
let quizFristStep = document.querySelector('.quiz_frist_step');
let exite = document.querySelector('.exite')
let hero =  document.querySelector('.hero')
let start =  document.querySelector('.start')
let quiz = document.querySelector('#quiz')
let resultBox = document.querySelector('#result_box');
let quizBox = document.querySelector('#quizbox');
let tryagain = document.querySelector('.try-again')
let gotohome = document.querySelector('.gotohome')

buttonStart.addEventListener('click', function(){
    quizFristStep.classList.add('active')
    hero.classList.add('active')
})

exite.addEventListener('click', function(){
    quizFristStep.classList.remove('active')
    hero.classList.remove('active')

})

start.addEventListener('click', function(){
    quiz.classList.add('active');
    hero.classList.remove('active')
    quizFristStep.classList.remove('active')
    ShowQuestion(0);
    questionCounter(1);
    headerScore();
})
tryagain.addEventListener('click', function(){
    quiz.classList.add('active');
    resultBox.classList.remove('active')
    quizBox.classList.remove('active')
    AnotherNextBtn.classList.remove('active')

    QuestionCount = 0;
    QuestionNum = 1;
     UserScore = 0;

     ShowQuestion(QuestionCount)
     questionCounter(QuestionNum)
    headerScore();
})
gotohome.addEventListener('click', function(){
    quiz.classList.remove('active');
    resultBox.classList.remove('active')
    AnotherNextBtn.classList.remove('active')

    QuestionCount = 0;
    QuestionNum = 1;
     UserScore = 0;

     ShowQuestion(QuestionCount)
     questionCounter(QuestionNum)
})








let QuestionCount = 0;
let QuestionNum = 1;
let UserScore = 0;
let AnotherNextBtn = document.querySelector('.next_btn')

AnotherNextBtn.addEventListener('click', function(){

    if(QuestionCount < questions.length -1){
        QuestionCount++;
        ShowQuestion(QuestionCount)

        QuestionNum++;
        questionCounter(QuestionNum)
    }
    else{
        console.log('question complate')
        ShowResult();
    }
    AnotherNextBtn.classList.remove('active')


})
// getting question and option from array

let OptionList = document.querySelector('.option_list')


function ShowQuestion(index){
    let QuestionText = document.querySelector('#question_text');
    QuestionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optonTag = `<div class="option">${questions[index].option[0]}</div>
                            <div class="option">${questions[index].option[1]}</div>
                            <div class="option">${questions[index].option[2]}</div>
                            <div class="option">${questions[index].option[3]}</div>`;

    OptionList.innerHTML = optonTag;

    let option = document.querySelectorAll('.option')
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer  = questions[QuestionCount].answer;
    let allOption = document.querySelectorAll('.option');
    if(userAnswer == correctAnswer){
        answer.classList.add('correct')
        UserScore += 1;
        headerScore();
    }else{
        answer.classList.add('wrong')
    }


    for(let i = 0; i < allOption.length; i++){
        if(allOption[i].textContent == correctAnswer){
            allOption[i].setAttribute('class', 'option correct');
        }
    }
    // if user is selected all option is desibled

    for(let i = 0; i < allOption.length; i++){
        allOption[i].classList.add('disabled');
    }
    AnotherNextBtn.classList.add('active')
}





function questionCounter(index){
    let questionTotal =  document.querySelector('.fotter_text');
    questionTotal .textContent = `${index} of ${questions.length} Questions`
}


function headerScore(){
    let ScoreText = document.querySelector('.score');
    ScoreText.textContent = `Score: ${UserScore} / ${questions.length}`;
}

function ShowResult(){
    quizBox.classList.add('active')
    resultBox.classList.add('active')


    let scoreText = document.querySelector('.reult_score');
    scoreText.textContent = `your Score ${UserScore} out of ${questions.length}`
    let circleProgress = document.querySelector('.percantage_container');
    let circleValue = document.querySelector('.percantage_value');

    let progressValueStart = -1;
    let progressendValue = (UserScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() =>{
        progressValueStart++;

        circleValue.textContent = `${progressValueStart}%`
        circleProgress.style.background = `conic-gradient(#c40094 ${progressValueStart * 3.6}deg, rgba(255,255,255,.1) 0deg)`;
        if(progressValueStart == progressendValue){
            clearInterval(progress);
        }
    },speed)

}