let refreshButton = document.querySelector('.button')
let row = document.querySelector('.container .row')
let boxes = 10;

let GenratePlate = () =>{
    row.innerHTML = '';  
    
    for(let i = 0; i < boxes; i++){ 
    let randomeHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomeHex = `#${randomeHex.padStart(6, '0')}`;
   
    let color = document.createElement('div')
    color.classList.add('col')
    color.innerHTML = `<div class="color" style="background: ${randomeHex}"></div>
    <div class="code_color">${randomeHex}</div>`;
        color.addEventListener('click', () => CopyColor(color, randomeHex));
    row.appendChild(color);

    }
}

GenratePlate();

let CopyColor = (elem, hexVal) =>{
    let createElement = elem.querySelector('.code_color');
    navigator.clipboard.writeText(hexVal).then(() =>{
        createElement.innerText = 'copied';
    })
}

refreshButton.addEventListener('click', GenratePlate)