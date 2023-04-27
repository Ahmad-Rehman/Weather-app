document.addEventListener('DOMContentLoaded', function () {

  const apiKey = "1b837eece2dd859127c7dd3d01f38969";

  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");
  const getWeatherBtn = document.getElementById("btn-get-weather");
  const tempElem = document.getElementById("temp");
  const humidityElem = document.getElementById("humidity");
  const windSpeedElem = document.getElementById("wind-speed");

  const countries = [
    { name: "USA", cities: ["New York", "Los Angeles", "Chicago", "Houston"] },
    { name: "Turkey", cities: ["Cappadocia", "Istanbul", "Ankara", "Izmir"] },
    { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth"] },
    { name: "India", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"] },
  ];


  countrySelect.addEventListener("change", () => {

    citySelect.innerHTML = '<option value="" selected disabled>Select a city</option>';

    const selectedCountry = countrySelect.value;
    const selectedCities = countries.find((country) => country.name === selectedCountry).cities;


    selectedCities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });


    citySelect.disabled = false;
    getWeatherBtn.disabled = false;
  });

  getWeatherBtn.addEventListener("click", () => {
    const selectedCity = citySelect.value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {

        tempElem.innerText = data.main.temp + " °C";
        humidityElem.innerText = data.main.humidity + " %";
        windSpeedElem.innerText = data.wind.speed + " m/s";


        document.getElementById("weather-data").style.display = "block";
      })
      .catch(error => {
        console.log(error);
      });
  });
});