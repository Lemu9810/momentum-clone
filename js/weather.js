const API_KEY = config.apiKey;

const weather = document.querySelector("#weather span:first-child");
const icon = document.querySelector("#weather span:last-child");

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //console.log(url);

  fetch(url)
    .then((resopnse) => resopnse.json())
    .then((data) => {
      weather.innerText = `${data.name}/${data.main.temp}°`;

      const weatherIcon = data.weather[0].description;
      const i = document.createElement("i");

      if (weatherIcon === "clear sky") {
        i.setAttribute("class", "fa-solid fa-sun");
      } else if (
        weatherIcon === "few clouds" ||
        weatherIcon === "scattered clouds" ||
        weatherIcon === "broken clouds"
      ) {
        i.setAttribute("class", "fa-solid fa-cloud");
      } else if (weatherIcon === "shower rain" || weatherIcon === "rain") {
        i.setAttribute("class", "fa-solid fa-cloud-rain");
      } else if (weatherIcon === "thunderstorm") {
        i.setAttribute("class", "fa-solid fa-cloud-bolt");
      } else if (weatherIcon === "snow") {
        i.setAttribute("class", "fa-solid fa-snowman");
      } else if (weatherIcon === "mist") {
        i.setAttribute("class", "fa-solid fa-bars-staggered");
      }

      icon.append(i);
    });
}

function onGeoError() {
  alert("can't find your location :(");
}
