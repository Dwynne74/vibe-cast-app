// -----TO-DO-LIST-----
const addButton = document.querySelector("#add-button");
const taskInput = document.querySelector("#task");
const list = document.querySelector("#to-do-list");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const value = taskInput.value;
  if (value) {
    const newTask = document.createElement("li");
    const deleteIcon = document.createElement("i");
    const icon = document.createElement("i");

    deleteIcon.classList.add("bi", "bi-x-circle-fill");
    icon.classList.add("bi", "bi-circle");

    newTask.append(icon);
    newTask.append(value);
    newTask.append(deleteIcon);

    icon.addEventListener("click", () => {
      icon.classList.toggle("bi-circle");
      icon.classList.toggle("bi-check-circle");
    });
    deleteIcon.addEventListener("click", () => newTask.remove());

    list.appendChild(newTask);
    taskInput.value = "";
  }
}

function reset() {}

// -----CLOCK-----
const clock = document.querySelector(".clock");
const stopWatch = document.querySelector(".stop-watch");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
let secondsElapsed = 0;
let stopWatchInterval = null;

function padStart(value) {
  return String(value).padStart(2, "0");
}

function updateClock() {
  const dateNow = new Date();

  let hours = dateNow.getHours();
  let minutes = dateNow.getMinutes();
  //   let seconds = dateNow.getSeconds();

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  clock.innerHTML = `${padStart(hours)}:${padStart(
    minutes
  )} <span>${amPm}</span>`;
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  stopWatch.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (stopWatchInterval) stopClock();
  stopWatchInterval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(stopWatchInterval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
resetBtn.addEventListener("click", resetClock);

updateClock();
const clockInterval = setInterval(updateClock, 1000);

// -----WEATHER-----
const apiKey = "88a286aaba85e09a2aa76f29ac92e861";
const searchBtn = document.querySelector("#searchBtn");
const weatherInfo = document.querySelector("#weatherInfo");
const cityInput = document.querySelector(".search #city");
let temperature;

searchBtn.addEventListener("click", () => {
  const city = document.querySelector("#city").value.trim();
  if (city) {
    getWeather(city);
  } else {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
  }
});

cityInput.addEventListener("keydown", (event) => {
  const city = document.querySelector("#city").value.trim();
  if (event.key === "Enter") {
    if (city) {
      getWeather(city);
    } else {
      weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    }
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
}

function showWeather(data) {
  const { name, main, weather } = data;
  temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    <p id="temp-display" class="celcius">${Math.round(temperature)}°C</p>
    <p>${description}</p>
    `;

  const tempChange = document.querySelector("#temp-display");

  tempChange.addEventListener("click", () => {
    if (tempChange.classList.contains("celcius")) {
      tempChange.innerHTML = `${Math.round(
        celciusToFahrenheit(temperature)
      )}°F`;
    } else {
      tempChange.innerHTML = `${Math.round(temperature)}°C`;
    }
    tempChange.classList.toggle("celcius");
  });

  bunnyClothes(temperature);
}

// BUNNY
const svg = document.querySelector("svg");
const bunny = document.querySelector("#bunny");
const rightArmWave = document.querySelector("#bunny-right-arm-wave"); // the waving arm element
const rightArm = document.querySelector("#bunny-right-arm");
let type;
let currentType;

svg.addEventListener("click", () => {
  changeClothesColor(type);
});

function celciusToFahrenheit(tempInCelcius) {
  return Math.round((tempInCelcius * 9) / 5 + 32);
}

function bunnyClothes(temperature) {
  const tempInCelcius = celciusToFahrenheit(temperature);
  if (currentType) {
    currentType.classList.toggle("visible");
  }

  if (tempInCelcius >= 90) {
    type = "very-hot-clothes";
  } else if (tempInCelcius >= 80 && tempInCelcius <= 89) {
    type = "hot-clothes";
  } else if (tempInCelcius >= 70 && tempInCelcius <= 79) {
    type = "warm-clothes";
  } else if (tempInCelcius >= 60 && tempInCelcius <= 69) {
    type = "mild-cool-clothes";
  } else if (tempInCelcius >= 50 && tempInCelcius <= 59) {
    type = "chilly-clothes";
  } else if (tempInCelcius >= 40 && tempInCelcius <= 49) {
    type = "cold-clothes";
  } else if (tempInCelcius >= 30 && tempInCelcius <= 39) {
    type = "very-cold-clothes";
  } else {
    type = "freezing-clothes";
  }

  currentType = document.querySelector(`#${type}`);
  currentType.classList.toggle("visible");
}

function changeClothesColor(type) {
  console.log(type);
  switch (type) {
    case "very-hot-clothes": {
      const hat = document.querySelector("#very-hot-hat-color");
      const shirt = document.querySelector("#very-hot-shirt-color");
      const pants = document.querySelector("#very-hot-pants-color");

      const hatColors = [
        "#2bb17c",
        "#238ebc",
        "#a3d4e4",
        "#be805c",
        "#0f1c30",
        "#342a40",
        "#f12e90",
        "#c2ff90",
        "#f894d0",
      ];
      const shirtColors = [
        "#90f6f5",
        "#238ebc",
        "#a3d4e4",
        "#be805c",
        "#0f1c30",
        "#342a40",
        "#f12e90",
        "#c2ff90",
        "#f894d0",
      ];
      const pantsColors = [
        "#7082bf",
        "#238ebc",
        "#a3d4e4",
        "#be805c",
        "#0f1c30",
        "#342a40",
        "#f12e90",
        "#c2ff90",
        "#f894d0",
      ];

      const randomHat = hatColors[Math.floor(Math.random() * hatColors.length)];
      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];

      hat.setAttribute("fill", randomHat);
      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      break;
    }
    case "hot-clothes": {
      const shirt = document.querySelector("#hot-shirt-color");
      const pants = document.querySelector("#hot-pants-color");
      const firstShoes = document.querySelector("#hot-shoes-1-color");
      const secondShoes = document.querySelector("#hot-shoes-2-color");

      const shirtColors = [
        "#fcf6f5",
        "#5c4e4e",
        "#fdfaec",
        "#eb7847",
        "#005e94",
        "#2b18a3",
        "#f353d5",
        "#e9d8e1",
        "#88c9fa",
      ];
      const pantsColors = [
        "#cc95f8",
        "#5c4e4e",
        "#fdfaec",
        "#eb7847",
        "#005e94",
        "#2b18a3",
        "#f353d5",
        "#e9d8e1",
        "#88c9fa",
      ];
      const shoesColors = [
        "#73fefe",
        "#5c4e4e",
        "#fdfaec",
        "#eb7847",
        "#005e94",
        "#2b18a3",
        "#f353d5",
        "#e9d8e1",
        "#88c9fa",
      ];

      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];
      const randomShoes =
        shoesColors[Math.floor(Math.random() * shoesColors.length)];

      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      firstShoes.setAttribute("fill", randomShoes);
      secondShoes.setAttribute("fill", randomShoes);
      break;
    }
    case "warm-clothes": {
      const shirt = document.querySelector("#warm-shirt-color");
      const pants = document.querySelector("#warm-pants-color");
      const firstShoes = document.querySelector("#warm-shoes-1-color");
      const secondShoes = document.querySelector("#warm-shoes-2-color");

      const shirtColors = [
        "#ffc949",
        "#bcece0",
        "#36eee0",
        "#f652a0",
        "#4c5270",
        "#e8b4b8",
        "#eed6d3",
        "#a49393",
        "#67595e",
      ];
      const pantsColors = [
        "#156bd5",
        "#bcece0",
        "#36eee0",
        "#f652a0",
        "#4c5270",
        "#e8b4b8",
        "#eed6d3",
        "#a49393",
        "#67595e",
      ];
      const shoesColors = [
        "#684f6f",
        "#bcece0",
        "#36eee0",
        "#f652a0",
        "#4c5270",
        "#e8b4b8",
        "#eed6d3",
        "#a49393",
        "#67595e",
      ];

      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];
      const randomShoes =
        shoesColors[Math.floor(Math.random() * shoesColors.length)];

      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      firstShoes.setAttribute("fill", randomShoes);
      secondShoes.setAttribute("fill", randomShoes);
      break;
    }
    case "mild-cool-clothes": {
      const shirt = document.querySelector("#mild-cool-shirt-color");
      const pants = document.querySelector("#mild-cool-pants-color");
      const firstShoes = document.querySelector("#mild-cool-shoes-1-color");
      const secondShoes = document.querySelector("#mild-cool-shoes-2-color");

      const shirtColors = [
        "#1b2fec",
        "#050a30",
        "#000c66",
        "#0000ff",
        "#7ec8e3",
        "#988780",
        "#ffffff",
        "#05263b",
        "#e7ded9",
      ];
      const pantsColors = [
        "#6b7096",
        "#050a30",
        "#000c66",
        "#0000ff",
        "#7ec8e3",
        "#988780",
        "#ffffff",
        "#05263b",
        "#e7ded9",
      ];
      const shoesColors = [
        "#c14f6f",
        "#050a30",
        "#000c66",
        "#0000ff",
        "#7ec8e3",
        "#988780",
        "#ffffff",
        "#05263b",
        "#e7ded9",
      ];

      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];
      const randomShoes =
        shoesColors[Math.floor(Math.random() * shoesColors.length)];

      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      firstShoes.setAttribute("fill", randomShoes);
      secondShoes.setAttribute("fill", randomShoes);
      break;
    }
    case "chilly-clothes": {
      const shirt = document.querySelector("#chilly-shirt-color");
      const pants = document.querySelector("#chilly-pants-color");
      const firstShoes = document.querySelector("#chilly-shoes-1-color");
      const secondShoes = document.querySelector("#chilly-shoes-2-color");

      const shirtColors = [
        "#05a1f5",
        "#e08955",
        "#0048a4",
        "#483d3c",
        "#689ab8",
        "#181310",
        "#060644",
        "#727880",
        "#ceb290",
      ];
      const pantsColors = [
        "#7082bf",
        "#e08955",
        "#0048a4",
        "#483d3c",
        "#689ab8",
        "#181310",
        "#060644",
        "#727880",
        "#ceb290",
      ];
      const shoesColors = [
        "#c1f482",
        "#e08955",
        "#0048a4",
        "#483d3c",
        "#689ab8",
        "#181310",
        "#060644",
        "#727880",
        "#ceb290",
      ];

      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];
      const randomShoes =
        shoesColors[Math.floor(Math.random() * shoesColors.length)];

      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      firstShoes.setAttribute("fill", randomShoes);
      secondShoes.setAttribute("fill", randomShoes);
      break;
    }
    case "cold-clothes": {
      const hat = document.querySelector("#cold-hat-color-1");
      const shirt = document.querySelector("#cold-shirt-color");
      const pants = document.querySelector("#cold-pants-color");
      const firstShoes = document.querySelector("#cold-shoes-1-color");
      const secondShoes = document.querySelector("#cold-shoes-2-color");

      const hatColors = [
        "#fff53f",
        "#e9ddd4",
        "#000000",
        "#e9ddd4",
        "#900020",
        "#afbcd5",
        "#6b7ea4",
        "#1f232c",
        "#162331",
      ];
      const shirtColors = [
        "#66113d",
        "#e9ddd4",
        "#000000",
        "#e9ddd4",
        "#900020",
        "#afbcd5",
        "#6b7ea4",
        "#1f232c",
        "#162331",
      ];
      const pantsColors = [
        "#040032",
        "#e9ddd4",
        "#000000",
        "#e9ddd4",
        "#900020",
        "#afbcd5",
        "#6b7ea4",
        "#1f232c",
        "#162331",
      ];
      const shoesColors = [
        "#02113d",
        "#e9ddd4",
        "#000000",
        "#e9ddd4",
        "#900020",
        "#afbcd5",
        "#6b7ea4",
        "#1f232c",
        "#162331",
      ];

      const randomHat = hatColors[Math.floor(Math.random() * hatColors.length)];
      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];
      const randomShoes =
        shoesColors[Math.floor(Math.random() * shoesColors.length)];

      hat.setAttribute("fill", randomHat);
      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      firstShoes.setAttribute("fill", randomShoes);
      secondShoes.setAttribute("fill", randomShoes);
      break;
    }
    case "very-cold-clothes": {
      const hat = document.querySelector("#very-cold-hat-color-1");
      const shirt = document.querySelector("#very-cold-shirt-color");
      const pants = document.querySelector("#very-cold-pants-color");

      const hatColors = [
        "#000007",
        "#6e1a10",
        "#ab9c80",
        "#282f30",
        "#ecb600",
        "#e0e3d3",
        "#b07d26",
        "#bc0a0f",
        "#00978a",
      ];
      const shirtColors = [
        "#f8f2a8",
        "#6e1a10",
        "#ab9c80",
        "#282f30",
        "#ecb600",
        "#e0e3d3",
        "#b07d26",
        "#bc0a0f",
        "#00978a",
      ];
      const pantsColors = [
        "#0a110d",
        "#6e1a10",
        "#ab9c80",
        "#282f30",
        "#ecb600",
        "#e0e3d3",
        "#b07d26",
        "#bc0a0f",
        "#00978a",
      ];

      const randomHat = hatColors[Math.floor(Math.random() * hatColors.length)];
      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];

      hat.setAttribute("fill", randomHat);
      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      break;
    }
    case "freezing-clothes": {
      const hat = document.querySelector("#freezing-hat-color-1");
      const shirt = document.querySelector("#freezing-shirt-color");
      const pants = document.querySelector("#freezing-pants-color");

      //   console.log(hat, shirt, pants, shoes, gloves);

      const hatColors = [
        "#4845e7",
        "#323432",
        "#787069",
        "#98a4b0",
        "#aba6aa",
        "#970c10",
        "#666340",
        "#acb4a0",
        "#ffe9c0",
      ];
      const shirtColors = [
        "#a50118",
        "#323432",
        "#787069",
        "#98a4b0",
        "#aba6aa",
        "#970c10",
        "#666340",
        "#acb4a0",
        "#ffe9c0",
      ];
      const pantsColors = [
        "#0a110d",
        "#323432",
        "#787069",
        "#98a4b0",
        "#aba6aa",
        "#970c10",
        "#666340",
        "#acb4a0",
        "#ffe9c0",
      ];

      const randomHat = hatColors[Math.floor(Math.random() * hatColors.length)];
      const randomShirt =
        shirtColors[Math.floor(Math.random() * shirtColors.length)];
      const randomPants =
        pantsColors[Math.floor(Math.random() * pantsColors.length)];

      hat.setAttribute("fill", randomHat);
      shirt.setAttribute("fill", randomShirt);
      pants.setAttribute("fill", randomPants);
      break;
    }
  }
}
