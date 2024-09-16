let scrollEle = document.querySelector(".line");
let body = document.querySelector("body")
window.addEventListener("scroll", function(){
  StartTopLine()
})

function StartTopLine() {
    let windowScreen = window.scrollY;
    let bodyHeight = body.scrollHeight;
    let windowInnerHei = window.innerHeight
    let Percentage = (windowScreen / ( bodyHeight - windowInnerHei) * 100);
    scrollEle.style.width = Percentage + "%"
}