const API_KEY = "c04f20a8a0aaae393d3b4285f3b92dc1";
function GeoOk(position) {
    console.log(position);

    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("you lived in " + lat + "," + long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".button-7").remove();
            const weatherContainer = document.querySelector("#weather");
            const weather = document.getElementById("city-weather");
            
            weather.innerText = `${data.weather[0].main} ${data.main.temp}` + " °C";
            const weatherIcon = data.weather[0].icon;
            const url2 = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            document.querySelector("#weatherIcon").setAttribute("src", url2);
            document.querySelector("#city-weather-box").classList.add("city-weather-box")
            console.log(url2);

            console.log(data);
        });
}
function GeoErr() {
    alert("Can't find you. No weather is provided");
}

const weatherBtn = document.querySelector(".button-7");
weatherBtn.addEventListener("click", handleWeatherBtn);
function handleWeatherBtn() {
    navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);
}
