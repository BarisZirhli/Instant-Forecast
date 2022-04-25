const url = "https://api.openweathermap.org/data/2.5/";
const key = "d45d7739070ec27f4daec82cfb5f4a70";

const weather = document.getElementById("weathervalue");

// event reaction printing
const mySet = (e) => {
  if (e.keyCode == "13") getResult(weather.value);
  console.log(weather);
};

// pulling informantion from API
const getResult = (city) => {
  let q = `${url}weather?q=${city}&appid=${key}&units=metric&lang=us`;
  fetch(q)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  const city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  const temp = document.querySelector(".temp");
  temp.innerText = `${result.main.temp}℃`;
};

weather.addEventListener("keypress", mySet);
