let colorInput = document.querySelectorAll(".color")
let ShowColor = document.querySelector(".main-color")
let Selected = document.querySelector("#selected")
let textarea = document.querySelector(".color-code textarea")
let refreshBtn = document.querySelector(".refresh")
let copyBtn = document.querySelector(".copy-code")

function RendomHexGen() {
    let RendomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${RendomHex}`
}
function ganerateGredient(isRendom) {
    if(isRendom){
        colorInput[1].value = RendomHexGen();
        colorInput[2].value = RendomHexGen();
    }
    let Gradient = `linear-gradient(${Selected.value}, ${colorInput[1].value}, ${colorInput[2].value})`;
    ShowColor.style.background = Gradient;
    textarea.value = `background: ${Gradient}`
}

function copyCode() {
   navigator.clipboard.writeText(textarea.value)
   copyBtn.innerHTML = "Copyed Successfully";
   setTimeout(()=>{copyBtn.innerHTML = "Copy Code"}, 1500)
}
function hovered() {
    let Gradient = `linear-gradient(${Selected.value}, ${colorInput[1].value}, ${colorInput[2].value})`;
    copyBtn.style.background = Gradient
}
function hoveredRem() {
    copyBtn.style.background = "#6F55C6"
}
colorInput.forEach(input =>{
    input.addEventListener("input", () => ganerateGredient(false))
})
Selected.addEventListener("change", () => ganerateGredient(false))
refreshBtn.addEventListener("click", () => ganerateGredient(true))
copyBtn.addEventListener("click", copyCode)
copyBtn.addEventListener("mouseover", hovered)
copyBtn.addEventListener("mouseout", hoveredRem)