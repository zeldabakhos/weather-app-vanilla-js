const API_KEY = "YOUR_API_KEY";
const cityLocation = "Paris";
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityLocation}&aqi=yes`;

const fetchWeather = async () => {
	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error("Network response was not ok.");

		const data = await response.json();
		console.log(data);

		// Destructuring data
		const {
			location: { name: city },
			current: { temp_c: temp, condition, wind_kph: wind, humidity, uv, feelslike_c: feelslike }
		} = data;

		// Updating DOM elements
		document.querySelector(".card-title").textContent = city;
		document.querySelector(".card-img").src = condition.icon;
		const listItems = document.querySelectorAll(".list-group-item");

		listItems[0].textContent = `Temperature: ${temp}°C`;
		listItems[1].textContent = `Humidity: ${humidity}%`;
		listItems[2].textContent = `Feels like: ${feelslike}°C`;
		listItems[3].textContent = `Wind: ${wind} km/h`;
		listItems[4].textContent = `UV: ${uv}`;
	} catch (error) {
		console.error("Fetch error:", error);
	}
};

// Run function on window load
window.onload = fetchWeather;