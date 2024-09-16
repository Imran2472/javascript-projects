let searchDiv = document.querySelector("#search");
searchDiv.addEventListener("click", function(){
  searchDiv.classList.add("show")
})

let body = document.querySelector("body")
body.addEventListener("click", function(e){
  if(e.target.id != "search"){
  searchDiv.classList.remove("show")
  }
  if(e.target.id == "sidebar"){
  sidebar.classList.remove("active");
  }
 
  
})
// side bar js 
let bugerMenu = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let closebuger = document.querySelector("#close")
bugerMenu.addEventListener("click", function(){
  sidebar.classList.add("active");
})
closebuger.addEventListener("click", function(){
  sidebar.classList.remove("active");
})
// top header thre dot 
let btntigger = document.querySelectorAll(".chivron")
let dropdown = document.querySelectorAll(".dropdown")
let bodynav = document.querySelector("#setting")
let backclick = document.querySelectorAll(".header i")
let dropArea = document.querySelector("#drop-area")
btntigger.forEach(btn =>{
  btn.addEventListener("click", function(e){
    e.preventDefault()
    dropdown.forEach(drop =>{
      if(btn.classList.contains(drop.id)){
        bodynav.classList.add("hide")
        dropArea.classList.add("show")
        drop.classList.add("active")
      }else{
        dropArea.classList.add("show")
        drop.classList.remove("active")
        // bodynav.classList.remove("hide")
      }
    })
  })
})

backclick.forEach(back =>{
  back.addEventListener("click", function(){

    dropdown.forEach(drop =>{
        dropArea.classList.remove("show")
        drop.classList.remove("active")
        bodynav.classList.remove("hide")
      })
  })
    
})

// three dot click show 
let dot = document.querySelector(".dot")
dot.addEventListener("click", function(e){
  bodynav.classList.toggle("show")
})

// --------button hover------
let button = document.querySelectorAll(".button button")
button.forEach(hover =>{
  hover.addEventListener("click", function(){
    button.forEach(hoverr =>{hoverr.classList.remove("hovered")})
    hover.classList.add("hovered")
  })
})


window.onload = () =>{
  let titles = document.querySelector(".title")
  titles.forEach(text =>{
    text.style.color = "red"
    text.substring(12)
  })
} 
  
