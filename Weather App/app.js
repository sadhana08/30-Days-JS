// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=58cd380346f24afc883a83e962c90d7e&units=metric

const apiLink = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "58cd380346f24afc883a83e962c90d7e";
const searchTerm = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const climateImg = document.querySelector(".weatherIcon");

const checkWeather = async (city) =>{
    const res = await fetch(apiLink + city + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);

    if(res.status === 404){
        document.querySelector(".tempPrimary").innerHTML = "-" + "°C";
        document.querySelector(".weatherType").innerHTML = "-";
        document.querySelector(".cityCountry").innerHTML = "Not Found";
        document.querySelector(".humidValue").innerHTML = "-" + " %";
        document.querySelector(".windValue").innerHTML = "-" + " km/h";
        climateImg.src = "images/404.png";
    }
    else{
        document.querySelector(".tempPrimary").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".weatherType").innerHTML = data.weather[0].main;
        document.querySelector(".cityCountry").innerHTML = data.name;
        document.querySelector(".humidValue").innerHTML = data.main.humidity + " %";
        document.querySelector(".windValue").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Clear"){
            climateImg.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Clouds"){
            climateImg.src = "images/cloud.png";
        }
        else if(data.weather[0].main === "Mist"){
            climateImg.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Rain"){
            climateImg.src = "images/snow.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            climateImg.src = "images/rain.png";
        }
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchTerm.value);
})

