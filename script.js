async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '87d12d1c90cad8c1b4cacae4c516c9c9'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherResult = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather-result').innerHTML = weatherResult;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Could not fetch weather data</p>`;
    }
}
