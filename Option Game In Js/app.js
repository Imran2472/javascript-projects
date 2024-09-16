let questions = [
    {
        question : "what does html stand for ?",
        answer: "C. hyper text markup language",
        option1: "A. hyper type multi language",
        option2:"B. hyper text multiple language",
        option3:"C. hyper text markup language",
        option4:"D. home text multi language"
    },
    {
        question : "what does css stand for ?",
        answer: "A. cascading style sheet",
        option1:"A. cascading style sheet",
         option2:"B. cute style sheet",
         option3:"C. computer style sheet",
         option4:"D. imrancode style sheet"

    },
    {
        question : "what does php stand for ?",
        answer: "A. hypertext preprocessor",
        option1:"A. hypertext preprocessor",
        option2:"B. home text programing",
        option3:"C. hypertext programing",
        option4:"D. programing hypertext preprocessor"
        
    },
    {
        question : "what does sql stand for ?",
        answer: "D. structured query language",
        option1:"A. strength query language",       
        option2:"B. stylesheet query langauge",
        option3:"C. science query languagee",
        option4:"D. structured query language"

    },
    {
        question : "what does xml stand for ?",
        answer: "D. extensible markup language",
        option1:"A. excellent multiple language",         
        option2:"B. explore multiple language",
        option3:"C. extra mark  language",
        option4:"D. extensible markup language"
    },
];

let Option1 = document.querySelector(".option1")
let Option2 = document.querySelector(".option2")
let Option3 = document.querySelector(".option3")
let Option4 = document.querySelector(".option4")
let Question = document.querySelector(".question");
let AnswerRadio = document.querySelectorAll(".radio");
let Submit = document.querySelector(".submit")
let currentQuestion = 0;
let Score = 0;
console.log(questions[currentQuestion])

function RenderQuestoin() {
    Question.textContent = questions[currentQuestion].question;
    Option1.textContent = questions[currentQuestion].option1;
    Option2.textContent = questions[currentQuestion].option2;
    Option3.textContent = questions[currentQuestion].option3;
    Option4.textContent = questions[currentQuestion].option4;
}
RenderQuestoin()



Submit.addEventListener("click", function(){
    let CheckAns = document.querySelector('.option input[type="radio"]:checked');
    if(!CheckAns){
        Swal.fire({
            title: "Please Select an Answer",
            text: "Please Select an Option",
            icon: "warning"
          });
    }else{
        if(CheckAns.nextElementSibling.textContent === questions[currentQuestion].answer){
            Score++;
        }
        currentQuestion++;
        if(currentQuestion < questions.length){
        CheckAns.checked = false;
            RenderQuestoin()
        }else{
            Swal.fire({
                title: "Good job!",
                text: `Your Score is ${Score} out Of ${questions.length}`,
                icon: "success"
              });
            }
    }
})