"use strict";

// PART 1: SHOW A FORTUNE
// evt is a parameter we are not doing anything with the event so we can just add the evt.preventDefault();
function showFortune(evt) {
  evt.preventDefault();
  fetch("/fortune")
    .then((response) => response.text())
    .then((fortuneData) => {
      document.querySelector(`#fortune-text`).innerHTML = fortuneData;
    });
}
// TODO: get the fortune and show it in the #fortune-text div

document
  .querySelector("#get-fortune-button")
  .addEventListener("click", showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = "/weather.json";
  const zipCode = document.querySelector("#zipcode-field").value;

  // TODO: request weather with that URL and show the forecast in #weather-info

  fetch(`${url}?zipcode=${zipCode}`)
    // fetch('/weather.json?zipcode=94110')
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      let weatherInforDiv = document.querySelector("#weather-info");
      weatherInforDiv.innerHTML = jsonData.forecast;
    });
}

document.querySelector("#weather-form").addEventListener("submit", showWeather);

// PART 3: ORDER MELONS

document.querySelector("#order-form").addEventListener("submit", orderMelons);
