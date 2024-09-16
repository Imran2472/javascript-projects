let SearchBtn = document.querySelector(".search_icon i");


SearchBtn.addEventListener("click", function(){
    let ApiKey = "c3392357a75006488eff7a839220abbc";
    let city = document.querySelector(".input input").value;
    if(city === ''){
        alert("please enter city name");
        return;
    }else{
        let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
        fetch(API).then(respons=> respons.json()).then(data=>{
            console.log(data)
            let weatherImg = document.querySelector(".main_box  img");
            let temperature = document.querySelector(".temperature .temp");
            let discription = document.querySelector(".temp_info");
            let hunidity = document.querySelector("#percent");
            let wind = document.querySelector("#wind");
            
            if(data.weather[0].main === "Clear"){
                weatherImg.src = 'images/clear.png'
            }
            else if(data.weather[0].main === "Rain"){
                weatherImg.src = 'images/rain.png'
            }
            else if(data.weather[0].main === "Snow"){
                weatherImg.src = 'images/snow.png'
            }
            else if(data.weather[0].main === "Clouds"){
                weatherImg.src = 'images/cloud.png'
            }
            else if(data.weather[0].main === "Mist"){
                weatherImg.src = 'images/mist.png'
            }
            else if(data.weather[0].main === "Haze"){
                weatherImg.src = 'images/mist.png'
            }else{
                weatherImg.src = 'images/cloud.png'
            }

            temperature.innerHTML = `${parseInt(data.main.temp)}`;
            discription.innerHTML = `${data.weather[0].description}`;
            hunidity.innerHTML = `${data.main.humidity}`;
            wind.innerHTML = `${data.wind.speed}` + "%";
            
        }).catch(error=>{
            Swal.fire({
                icon: "error",
                title: "City Not Found",
                text: "Please Enter Correct Country, City Name",
              });
              
        })
        
    }
})
