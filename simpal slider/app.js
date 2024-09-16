let container = document.querySelector(".container");
let CardText = document.querySelector(".title");
let pera = document.querySelector(".pera");

let PeraArry = [
    "sentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pa",
    "ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you ",
    " through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and",
    "standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, acco",
];
console.log(PeraArry.length)
let headtinArry = [
    "What is Lorem Ipsum",
    "Where can I get some?",
    "Where does it come from?",
    "Translations: Can you help t",
    "three colours and in a range of standard banner sizes:",
];

let count = 0;



function sliderOn() {
  setInterval(() => {
    CardText.innerHTML = headtinArry[count];
    pera.innerHTML = PeraArry[count];
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(images/${count}.jpg)`;
  
    count++;
  if(count >= PeraArry.length){
    count = 0
  
  }
  }, 5500)
   
}
sliderOn()

