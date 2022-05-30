let weather = {
    "apikey" : "74fa501c056b0985ce7c92f67ea2d728",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

//display the data
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML ="Humidity: " + humidity + "%";
        document.querySelector(".speed").innerHTML = "Speed: " + speed +  "km/h";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    },
};
document.querySelector(".search-button").addEventListener("click", function (){
    weather.search();
})

