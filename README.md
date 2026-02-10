# Pretoria Weather App - Vanilla JavaScript
This App that provides Weather focast for the city of Pretoria and the surrounding towns.
## Features
-- Displays current temperature, weather description, humidity percentage, wind speed and atmospheric pressure

-- Optimized for responsive design

-- Weather icon visualization

-- Displays current temperature

-- Shows weather description

-- Displays feels-like temperature

-- Shows humidity percentage

-- Displays wind speed

-- Shows atmospheric pressure

-- Weather icon visualization

-- Responsive design for mobile and desktop


##Included Locations:

Pretoria (default)

Centurion

Midrand

Sandton

Ekangala

Bronkhorstspruit

Cullinan

Hartbeespoort

Rustenburg

Hammanskraal

Setup Instructions
1. Get an API Key

Go to OpenWeatherMap

Sign up for a free account

Navigate to your API keys section

Copy your API key

2. Configure the App:

Open js/app.js

Replace 'YOUR_API_KEY_HERE' with your actual API key

Example:

const API_KEY = 'abc123def456'; // Your actual API key

That's it! The app is now configured for Pretoria and surrounding towns.

3. Run the App:

Simply open index.html in your web browser. That's it!

You can:

Double-click the index.html file, or

Right-click and choose "Open with" your browser, or

Use a local development server (like Live Server in VS Code)

Customization
Add More Cities

To add more towns or cities to the dropdown, edit the index.html file and add more <option> elements:

<select id="city-select">
    <option value="Pretoria">Pretoria</option>
    <option value="Your-City-Name">Your City Name</option>
    <!-- Add more cities here -->
</select>
Modify Styles

Edit css/style.css to change:

Colors

Fonts

Layout

Background gradient

Dropdown appearance

Change Temperature Units

To use Fahrenheit instead of Celsius, change units=metric to units=imperial in the API_URL:

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=imperial`;

Then update the temperature symbols in js/app.js from °C to °F.

Project Structure
weather-app/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── app.js          # JavaScript logic
└── README.md           # This file
Technologies Used

HTML5

CSS3

Vanilla JavaScript (ES6+)

OpenWeatherMap API

Browser Compatibility

Works in all modern browsers:

Chrome

Firefox

Safari

Edge

Troubleshooting

Weather data not showing?

Check that you've entered a valid API key

Verify the city name is spelled correctly

Check your internet connection

Open browser console (F12) to see error messages

API key not working?

It may take a few minutes for a new API key to activate

Make sure you're using the free tier API key correctly

Future Enhancements

Ideas to expand this project:

Add a search bar to look up any city worldwide

Display 5-day forecast

Show sunrise/sunset times

Add weather alerts

Add location detection using browser geolocation

Save user's preferred location

Add more South African cities

Display weather map
