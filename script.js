document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "###########";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");

    searchButton.addEventListener("click", () => {
        const location = locationInput.value;
        if (location) {
            fetchWeather(location); // Correct function name casing
        }
    });

    function fetchWeather(location) { // Correct function name casing
        const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();  // Parse the response as JSON
            })
            .then(data => {
                console.log(data);
                // Process your weather data here
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    function displayWeather(data) { // Correct function name casing
        locationElement.textContent = data.name;
        temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
        descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    }
});
