const btn = document.querySelector(".btn");
const loc = document.querySelector("#loc");
const temp = document.querySelector(".temp");
const cond = document.querySelector(".condition");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");



async function getData() {
    try{
 const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc.value}?key=XTMTYUZJTXWFGKFB3AWVWXLVB`);
    const data = await response.json();
    city = loc.value;
   function relData() {
/*console.log(`The current weather condition in ${loc.value} is as follows TEMP = ${data.currentConditions.temp} K,CONDITION = ${data.currentConditions.conditions},HUMIDITY = ${data.currentConditions.humidity},
  WINDSPEED = ${data.currentConditions.windspeed} as of this TIME${data.currentConditions.datetime}
`);*/
temp = data.currentConditions.temp;
};
console.log(data);
    
console.log(relData());
  }
  catch{
    console.error("Error 404!!");
  }
}


btn.addEventListener("click", ()=>{
getData();
});
