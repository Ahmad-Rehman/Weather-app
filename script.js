const apiKey = '1b837eece2dd859127c7dd3d01f38969';

function fetchWeatherData() 
{
  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp + ' Degree';
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById('temperature').textContent = temperature;
      document.getElementById('humidity').textContent = humidity;
      document.getElementById('wind-speed').textContent = windSpeed;
    })

    .catch(error => console.error(error));
}