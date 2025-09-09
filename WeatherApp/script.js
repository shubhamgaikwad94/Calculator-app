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
  "Bangalore": {info: "Temperature: 28°C, Pleasant, Humidity: 45%, Wind: 4 m/s", icon: "🌤️", bg: "#81ecec"},
  "Chennai": {info: "Temperature: 33°C, Humid, Humidity: 70%, Wind: 5 m/s", icon: "🌦️", bg: "#74b9ff"},
  "Hyderabad": {info: "Temperature: 31°C, Clear, Humidity: 38%, Wind: 6 m/s", icon: "☀️", bg: "#55efc4"},
  "Kolkata": {info: "Temperature: 34°C, Thunderstorms, Humidity: 65%, Wind: 7 m/s", icon: "⛈️", bg: "#ffeaa7"},
  "Ahmedabad": {info: "Temperature: 36°C, Hot, Humidity: 25%, Wind: 4 m/s", icon: "🌞", bg: "#fab1a0"},
  "Jaipur": {info: "Temperature: 34°C, Dry, Humidity: 28%, Wind: 5 m/s", icon: "☀️", bg: "#fd79a8"},
  "Lucknow": {info: "Temperature: 33°C, Partly Cloudy, Humidity: 42%, Wind: 6 m/s", icon: "🌤️", bg: "#a29bfe"},
  "Nagpur": {info: "Temperature: 35°C, Sunny, Humidity: 30%, Wind: 5 m/s", icon: "☀️", bg: "#ffeaa7"},
  "Indore": {info: "Temperature: 29°C, Cloudy, Humidity: 48%, Wind: 4 m/s", icon: "☁️", bg: "#dfe6e9"},
  "Chandigarh": {info: "Temperature: 28°C, Pleasant, Humidity: 40%, Wind: 3 m/s", icon: "🌤️", bg: "#81ecec"},
  "Bhopal": {info: "Temperature: 30°C, Rain Showers, Humidity: 55%, Wind: 5 m/s", icon: "🌧️", bg: "#74b9ff"},
  "Goa": {info: "Temperature: 29°C, Breezy, Humidity: 60%, Wind: 7 m/s", icon: "🌴", bg: "#55efc4"},
  "Patna": {info: "Temperature: 33°C, Humid, Humidity: 65%, Wind: 6 m/s", icon: "🌦️", bg: "#a29bfe"},
  "Surat": {info: "Temperature: 32°C, Cloudy, Humidity: 50%, Wind: 5 m/s", icon: "☁️", bg: "#dfe6e9"},
  "Kanpur": {info: "Temperature: 34°C, Hot, Humidity: 35%, Wind: 4 m/s", icon: "🌞", bg: "#fab1a0"},
  "Thiruvananthapuram": {info: "Temperature: 29°C, Rainy, Humidity: 70%, Wind: 6 m/s", icon: "🌧️", bg: "#74b9ff"},
  "Shillong": {info: "Temperature: 22°C, Cool & Misty, Humidity: 75%, Wind: 3 m/s", icon: "🌫️", bg: "#b2bec3"}
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
