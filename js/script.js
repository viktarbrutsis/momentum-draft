// Time section

let timeBlock = document.querySelector('.time');

const setTime = () => {
   timeBlock = new Date();
   console.log(timeBlock);
};

setTime();

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherInput = document.querySelector('.weather .city');

async function getWeather() {
   //weatherInput.value = 'Минск';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput.value}&lang=ru&appid=80659c23efb72dd787bc8a92cace8bfc&units=metric 
   `;
   const res = await fetch(url);
   const data = await res.json();

   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
   weatherDescription.textContent = data.weather[0].description;

 }

//async function getWeatherModified() {
//   weatherInput.value = item;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput.value}&lang=ru&appid=80659c23efb72dd787bc8a92cace8bfc&units=metric 
//   `;
//   const res = await fetch(url);
//   const data = await res.json();

//   weatherIcon.className = 'weather-icon owf';
//   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
//   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
//   weatherDescription.textContent = data.weather[0].description;

// }

// getWeatherModified();

 function setLocalStorage() {
   localStorage.setItem('name', weatherInput.value);
 }
 window.addEventListener('beforeunload', setLocalStorage);

 function getLocalStorage() {
   if(localStorage.getItem('name')) {
      weatherInput.value = localStorage.getItem('name');
   }

 }
 window.addEventListener('load', getLocalStorage);

 getWeather();

 function setCity(event) {
   if (weatherInput.value == '') {
      alert('введите город');
   } else {
      if (event.code === 'Enter') {
         getWeather(weatherInput.value);
   
       }
   }
   
 }

document.addEventListener('load', getWeather);

weatherInput.addEventListener('keypress', setCity);

