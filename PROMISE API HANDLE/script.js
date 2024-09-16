let URL = "https://official-joke-api.appspot.com/random_joke";
let btn = document.querySelector(".btn")
let jokes = document.querySelector(".jokes")
btn.addEventListener("click", function(){
    FetchData();
})
const FetchData = async () =>{
    let res = await fetch(URL);
    let data = await res.json();
    // console.log(data)
    GetData(data)
}

const GetData = (element) =>{
    let list = "";
        list += `
        <li class="heading">${element.type}</li>
        <li class="setup">${element.setup}</li>
        <li class="pach">${element.punchline}</li>
        `;

        jokes.innerHTML = list;

}