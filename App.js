const API_KEY = 'ba9713aa9bc90d8c48579a792a46cfae';

const citySelectElement = document.getElementById('city-select');
const cityNameElement = document.getElementById('city-name');
const tempElement = document.getElementById("temp");
const descriptionElement = document.getElementById('description');
const feelsLikeElement = document.getElementById('feels-like');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const pressureElement = document.getElementById('pressure');
const weatherIconElement = document.getElementById('weather-icon');
const errorMessageElement = document.getElementById('error-message');

function getWeatherData(city) {
    cityNameElement.textContent = 'Loading...';

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},ZA&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found or API error');
        }
        return response.json();
    })
    .then(data => {
        displayWeatherData(data);
        })
    .catch(error => {
            showError('Unable to fetch weather data. Please check your API key and internet connection');
            console.error('Error:', error)
    })
}

function displayWeatherData(data) {
    errorMessageElement.classList.add('hidden');

    cityNameElement.textContent = data.name;
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
    feelsLikeElement.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windSpeedElement.textContent = `${data.wind.speed} m/s`;
    pressureElement.textContent = `${data.main.pressure} hPa`;

    const iconCode = data.weather[0].icon;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconElement.alt = data.weather[0].description;
}

function showError(message) {
    errorMessageElement.textContent = message;
    errorMessageElement.classList.remove('hidden');

    cityNameElement.textContent = 'Error';
    tempElement.textContent = '--°C';
    descriptionElement.textContent = '--';
    feelsLikeElement.textContent = '--°C';
    humidityElement.textContent = '--%';
    windSpeedElement.textContent = '-- m/s';
    pressureElement.textContent = '-- hPa';
    weatherIconElement.src = '';
}

function handleCityChange() {
    const selectedCity = citySelectElement.value;
    getWeatherData(selectedCity);
}

window.addEventListener('load', () => {
    const initialCity = citySelectElement.value;
    getWeatherData(initialCity);
})

citySelectElement.addEventListener('change', handleCityChange);