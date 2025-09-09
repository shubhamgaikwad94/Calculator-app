var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("cityInput");
var weatherResult = document.getElementById("weatherResult");
var darkModeToggle = document.getElementById("darkModeToggle");
var weatherContainer = document.querySelector(".weather-container");

// Dark mode toggle
darkModeToggle.onclick = function() {
  if (document.body.className === "dark-mode") {
    document.body.className = "";
  } else {
    document.body.className = "dark-mode";
  }
};

// Predefined weather data with icons and background colors
var weatherData = {
  "Pune": {info: "Temperature: 30°C, Sunny, Humidity: 40%, Wind: 5 m/s", icon: "☀️", bg: "#ffeaa7"},
  "Mumbai": {info: "Temperature: 32°C, Cloudy, Humidity: 50%, Wind: 6 m/s", icon: "☁️", bg: "#dfe6e9"},
  "Delhi": {info: "Temperature: 35°C, Hot, Humidity: 30%, Wind: 4 m/s", icon: "🌞", bg: "#fab1a0"},
  "Bangalore": {info: "Temperature: 28°C, Pleasant, Humidity: 45%, Wind: 4 m/s", icon: "🌤️", bg: "#81ecec"}
};

// Show weather info
searchBtn.onclick = function() {
  var city = cityInput.value;
  var data = weatherData[city];

  if (data) {
    weatherResult.innerHTML = "<div class='weather-icon'>" + data.icon + "</div>" + 
                              "<strong>" + city + "</strong><br>" + data.info;
    weatherContainer.style.backgroundColor = data.bg; // change container background
  } else {
    weatherResult.innerHTML = "City not found!";
    weatherContainer.style.backgroundColor = "#fff";
  }
};
