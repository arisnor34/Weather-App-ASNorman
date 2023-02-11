// Update Temp
function showTemp(response) {
  let fahrenheitTemperature = Math.round(
    response.data.daily[0].temperature.day
  );
  let temperatureElement = document.querySelector(".displayTemp");

  let geoCityName = response.data.city;
  let currentCity = document.querySelector("#city-name");

  let locationIcon = document.querySelector(".main-image");
  let apiIcon = response.data.daily[0].condition.icon_url;

  let updateCloud = document.querySelector(".clouds");
  let mainCloud = response.data.daily[0].condition.description;

  let updateHumidity = document.querySelector(".humidity");
  let mainHumidity = response.data.daily[0].temperature.humidity;

  let updateWind = document.querySelector(".wind-speed");
  let mainWind = response.data.daily[0].wind.speed;

  let updateMxTemp1 = document.querySelector(".frcst-temp-mx1");
  let maxOne = Math.round(response.data.daily[1].temperature.maximum);
  let updateMnTemp1 = document.querySelector(".frcst-temp-mn1");
  let minOne = Math.round(response.data.daily[1].temperature.minimum);

  let updateMxTemp2 = document.querySelector(".frcst-temp-mx2");
  let maxTwo = Math.round(response.data.daily[2].temperature.maximum);
  let updateMnTemp2 = document.querySelector(".frcst-temp-mn2");
  let minTwo = Math.round(response.data.daily[2].temperature.minimum);

  let updateMxTemp3 = document.querySelector(".frcst-temp-mx3");
  let maxThree = Math.round(response.data.daily[3].temperature.maximum);
  let updateMnTemp3 = document.querySelector(".frcst-temp-mn3");
  let minThree = Math.round(response.data.daily[3].temperature.minimum);

  let updateMxTemp4 = document.querySelector(".frcst-temp-mx4");
  let maxFour = Math.round(response.data.daily[4].temperature.maximum);
  let updateMnTemp4 = document.querySelector(".frcst-temp-mn4");
  let minFour = Math.round(response.data.daily[4].temperature.minimum);

  let updateMxTemp5 = document.querySelector(".frcst-temp-mx5");
  let maxFive = Math.round(response.data.daily[5].temperature.maximum);
  let updateMnTemp5 = document.querySelector(".frcst-temp-mn5");
  let minFive = Math.round(response.data.daily[5].temperature.minimum);

  let locationIcon1 = document.querySelector(".weekly-one");
  let apiIcon1 = response.data.daily[1].condition.icon_url;
  let locationIcon2 = document.querySelector(".weekly-two");
  let apiIcon2 = response.data.daily[2].condition.icon_url;
  let locationIcon3 = document.querySelector(".weekly-three");
  let apiIcon3 = response.data.daily[3].condition.icon_url;
  let locationIcon4 = document.querySelector(".weekly-four");
  let apiIcon4 = response.data.daily[4].condition.icon_url;
  let locationIcon5 = document.querySelector(".weekly-five");
  let apiIcon5 = response.data.daily[5].condition.icon_url;

  currentCity.innerHTML = `${geoCityName}`;
  temperatureElement.innerHTML = `${fahrenheitTemperature}`;
  globalFahrenheitTemperature = fahrenheitTemperature;
  locationIcon.setAttribute("src", `${apiIcon}`);
  updateCloud.innerHTML = `<strong>${mainCloud}</strong>`;
  updateHumidity.innerHTML = `${mainHumidity}`;
  updateWind.innerHTML = `${mainWind}`;
  updateMxTemp1.innerHTML = `${maxOne}°`;
  updateMnTemp1.innerHTML = `${minOne}°`;
  updateMxTemp2.innerHTML = `${maxTwo}°`;
  updateMnTemp2.innerHTML = `${minTwo}°`;
  updateMxTemp3.innerHTML = `${maxThree}°`;
  updateMnTemp3.innerHTML = `${minThree}°`;
  updateMxTemp4.innerHTML = `${maxFour}°`;
  updateMnTemp4.innerHTML = `${minFour}°`;
  updateMxTemp5.innerHTML = `${maxFive}°`;
  updateMnTemp5.innerHTML = `${minFive}°`;
  locationIcon1.setAttribute("src", `${apiIcon1}`);
  locationIcon2.setAttribute("src", `${apiIcon2}`);
  locationIcon3.setAttribute("src", `${apiIcon3}`);
  locationIcon4.setAttribute("src", `${apiIcon4}`);
  locationIcon5.setAttribute("src", `${apiIcon5}`);
}

//Search Weather API Function
function cityName(event) {
  event.preventDefault();
  let cityDisplay = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = cityDisplay.value;
  let apiKey = "40tb1c1a3eceff165eobe15e3ae05d42";
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast?";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}query=${cityDisplay.value}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
}

let city = document.querySelector("#city-search");
city.addEventListener("submit", cityName);

// Current Coordinates Weather API Function (default display)
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiEndpoint = "https://api.shecodes.io/weather/v1/forecast?";
  let apiKey = "40tb1c1a3eceff165eobe15e3ae05d42";
  let unit = "imperial";
  let apiUrl = `${apiEndpoint}lon=${lon}&lat=${lat}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
  console.log(apiUrl);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

let globalFahrenheitTemperature = "null";

//update-time & Date
let updateTime = document.querySelector(".update-time");
let updateDayI = document.querySelector(".forecast-date1");
let updateDayII = document.querySelector(".forecast-date2");
let updateDayIII = document.querySelector(".forecast-date3");
let updateDayIV = document.querySelector(".forecast-date4");
let updateDayV = document.querySelector(".forecast-date5");
let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
updateDayI.innerHTML = days[(now.getDay() + 1) % 7];
updateDayII.innerHTML = days[(now.getDay() + 2) % 7];
updateDayIII.innerHTML = days[(now.getDay() + 3) % 7];
updateDayIV.innerHTML = days[(now.getDay() + 4) % 7];
updateDayV.innerHTML = days[(now.getDay() + 5) % 7];
let hour = now.getHours();
hour = hour % 12;
hour = hour ? hour : 12;
const minutes = String(now.getMinutes()).padStart(2, "0");
let ampm = +hour[0] < 12 ? "am" : "pm";
updateTime.innerHTML = `<em>Last updated: ${hour}:${minutes}${ampm}, ${date} ${month} ${year}</em>`;
