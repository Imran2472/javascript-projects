let selectTag = document.querySelectorAll("select");
let TranslateBTn = document.querySelector(".button")
let FormText = document.querySelector(".from-text")
let  toText = document.querySelector(".to-text")
selectTag.forEach((tag, id) =>{
    for(let country_code in countries) {
        let selected;
        if(id == 0 && country_code == "en-GB"){
            selected = "selected"
        }else if(id == 1 && country_code == "hi-PK"){
            selected = "selected"
        }
        let option = `
        <option value="${country_code}" ${selected}>${countries[country_code]}</option>
        `
        tag.insertAdjacentHTML("beforeend", option)
    }
});

TranslateBTn.addEventListener("click", function(){
    let text =FormText.value;
    TranslateFrom = selectTag[0].value;
   TranslateTo = selectTag[1].value;
   console.log(TranslateTo)
   let Api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${TranslateFrom}| ${TranslateTo} `;
   fetch(Api).then(res => res.json()).then(data =>{
    console.log(data)
    toText.value = data.responseData.translatedText;

   })
})