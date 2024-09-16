let Input = document.querySelector("#text");
let Add_button = document.querySelector("#add");
let list_container = document.querySelector(".list-elementer");


document.addEventListener("DOMContentLoaded", GetItemLocalStorage)

Add_button.addEventListener("click", function() {
    addText()
})

list_container.addEventListener("click", function(e){
    chechInput(e)
})



function addText() {
    let input_value = Input.value;
    if(input_value === ''){
        alert("something type please !")
        return;
    }
    else{
        let creatElement = document.createElement("div");
        creatElement.classList.add("list");
        creatElement.innerHTML = `
        <input class="form-check-input" type="checkbox" value="" id="check1">
        <div id="check1" class="text-list">${input_value}</div>
        <i class="fa-solid fa-xmark boxes" onclick="remove_list()"></i>
        `;
        list_container.appendChild(creatElement);
        Input.value = "";
        savedItems()
    }
}

function chechInput(e){
    console.log(e.target)
    if(e.target.className === "text-list"){
   e.target.classList.toggle("line-throw")
   e.target.previousElementSibling.checked = true;
   savedItems()
    }else{
        e.target.previousElementSibling.checked = false;
        e.target.classList.remove("line-throw")
        savedItems()
    }

}

function remove_list(){
  let removeBtn = document.querySelector(".boxes")
  let parentElement = removeBtn.parentElement;
  parentElement.remove();
  savedItems()
}


function savedItems(){
  localStorage.setItem("data", list_container.innerHTML)
   
}

function GetItemLocalStorage() {
    list_container.innerHTML = localStorage.getItem("data")
}
