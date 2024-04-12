const API_KEY = config.apiKey;

const weather = document.querySelector("#weather span");
const icon = document.querySelector("#weather img");

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((resopnse) => resopnse.json())
    .then((data) => {
      weather.innerText = `${data.name}/${data.main.temp}°`;

      const weatherIcon = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      icon.src = iconUrl;
    });
}

function onGeoError() {
  alert("can't find your location :(");
}
