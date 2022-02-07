const body = document.querySelector("body");
const input = document.querySelector("input");
const url = "1cf244a3e4483759e2254707ce4561a1";
const button = document.querySelector("button");

// const cardInfo = document.getElementById("divInfo");
const divInfo = document.createElement("div");
divInfo.id = "divInfo";
body.appendChild(divInfo);

const cityName = document.createElement("p");
cityName.id = "cityName";
const p1 = document.createElement("p");
p1.id = "p1";
const p2 = document.createElement("p");
p2.id = "p2";
const p3 = document.createElement("p");
p3.id = "p3";
const p4 = document.createElement("p");
p4.id = "p4";
const p5 = document.createElement("p");
p5.id = "p5";

let img = document.createElement("img");
let p1Main = document.createTextNode("");
let p2Description = document.createTextNode("");
let p3Temp = document.createTextNode("");
let p4TempMin = document.createTextNode("");
let p5TempMax = document.createTextNode("");
let city = document.createTextNode("");

p1.appendChild(p1Main);
p2.appendChild(p2Description);
p3.appendChild(p3Temp);
p4.appendChild(p4TempMin);
p5.appendChild(p5TempMax);
cityName.appendChild(city);

// const weather = async () => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${url}`);
//     const myJson = await response.json();
//     console.log(myJson.weather[0].main);
// }

const weather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${url}&units=metric`);
    const myJson = await response.json();
    weatherMain(myJson);
}

const weatherMain = (json) => {
        p1Main.nodeValue = `${json.weather[0].main}:`;
        p2Description.nodeValue = json.weather[0].description;
        p3Temp.nodeValue = `${json.main.temp}°C`;
        p4TempMin.nodeValue = `Temperature min: ${json.main.temp_min}°C`;
        p5TempMax.nodeValue = `Temperature max: ${json.main.temp_max}°C`;
        city.nodeValue = `${json.name}, ${json.sys.country}`;
        img.src = `/workshop3.2/icons white/${json.weather[0].icon}.png`;
    
        divInfo.append(cityName, p3, p1, p2, img, p4, p5); 
}

