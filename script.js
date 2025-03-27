var API_KEY = "YOUR_API_KEY"
var cityLocation = "Paris"
var URL =
	"https://api.weatherapi.com/v1/current.json?key=" +
	API_KEY +
	"&q=" +
	cityLocation +
	"&aqi=yes"

function fetchWeather() {
	fetch(URL)
		.then(function (response) {
			if (response.ok) {
				return response.json()
			}
			throw new Error("Network response was not ok.")
		})
		.then(function (data) {
			console.log(data)
			var city = data.location.name
			var temp = data.current.temp_c
			var icon = data.current.condition.icon
			var wind = data.current.wind_kph
			var humidity = data.current.humidity
			var uv = data.current.uv
			var feelslike = data.current.feelslike_c

			document.querySelector(".card-title").textContent = city
			//document.querySelector(".card-text").textContent = condition
			document.querySelector(".card-img").src = icon
			document.querySelectorAll(".list-group-item")[0].textContent =
				"Temperature: " + temp + "°C"
			document.querySelectorAll(".list-group-item")[1].textContent =
				"Humidity: " + humidity + "%"
			document.querySelectorAll(".list-group-item")[2].textContent =
				"Feels like: " + feelslike + "°C"
			document.querySelectorAll(".list-group-item")[3].textContent =
				"Wind: " + wind + " km/h"
			document.querySelectorAll(".list-group-item")[4].textContent = "UV: " + uv
		})
		.catch(function (error) {
			console.error("Fetch error:", error)
		})
}

window.onload = fetchWeather
