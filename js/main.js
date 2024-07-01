// "use strict"
// let response = [];
  

// function getWeatherApi(tem = "egypt"){
//    return new Promise(function(collback){

//         let request = new XMLHttpRequest();
//          request.open("get",`http://api.weatherapi.com/v1/forecast.json?key=7b0011f590fd432bafe210203241203&q=${tem}&days=3`);
//          request.send();
//          request.addEventListener("loadend",function(){
//              if(request.status == 200){
//                  response = JSON.parse(this.response);
//                  collback();
//              }
//          });
//     });
// }
// (async function (){
  
//     await getWeatherApi();
//     getCardOne();
//     getTowCard();
//     getThreeCard()

  

// })();

//  let s =   document.querySelector('.search'); s.addEventListener("keyup",async function(e){
//         // getWeatherApi(this.value).then(getCardOne).then(getTowCard);
//         await getWeatherApi(this.value);
      
//         getCardOne();
//         getTowCard();
//         getThreeCard()
      
 
       
//     });

    
  
//     console.log();
//     let sun = document.querySelector(".section-one");
//     function getCardOne(){

//       let todayDate = new Date();
//       let cartoona ="";
//         cartoona +=`
       
//         <div class="Sunday redis d-flex justify-content-between  w-100 p-2  ">
//           <span>${todayDate.toLocaleDateString("en-us",{weekday:"long"})}</span>
//           <span>${todayDate.getDate()}${todayDate.toLocaleDateString("en-us",{month:"long"})}</span>
//         </div>
//         <figcaption class="p-3 rounded-bottom-4 rows">
        
//         <h2 class="fs-4 py-3">${response.location.name}</h2>
//         <div class="d-flex">
//           <h1 class="Temperature"><span>${response.current.temp_c}</span><sup>o</sup>C</h1>

//           <img src="${response.current.condition.icon}" alt="sun">
          
//         </div>
//         <h5 class="Sunny py-3">${response.current.condition.text}</h5>
//           <div class="d-flex pb-4">
//             <div class="icons-card pe-2">
//               <img src="image/icon-umberella.png" alt="umberella">
//               <span>${response.current.humidity}%</span>
//             </div>
//             <div class="icons-card pe-2">
//               <img src="image/icon-wind.png" alt="wind">
//               <span>${response.current.wind_kph}km/h</span>
//             </div>
//             <div class="icons-card pe-2">
//               <img src="image/icon-compass.png" alt="compass">
//               <span>${response.current.wind_dir}</span>
//             </div>
//           </div>
//           </figcaption>
//           `
      
//     sun.innerHTML= cartoona;
//   }
//   function getTowCard(){

//     let containerTowCard =response.forecast.forecastday[1];
//     let nextDayDate = new Date(response.forecast.forecastday[1].date);
//     let sectionTow = "";
//     sectionTow +=`<div class="Sunday-center text-center p-2 ">
//     <span>${nextDayDate.toLocaleDateString("en-us",{weekday:"long"})}</span>
//   </div>
//   <div class="p-3">
//     <div class="p-3 text-center m-auto pt-5">
//       <img class="" src="${containerTowCard.day.condition.icon}" alt="sun">
//       <div>
//         <span class="fs-4 fw-bolder"><span>${containerTowCard.day.maxtemp_c}</span><sup>o</sup>C</span>
//         <p>${containerTowCard.day.mintemp_c}<sup>o</sup></p>
//         <p class="Sunny">${containerTowCard.day.condition.text}</p>
//       </div>
      
//     </div>
//   </div>`

//   document.querySelector(".section-tow").innerHTML=sectionTow;

//   }
//   function getThreeCard(){
//     let containerThreeCard =response.forecast.forecastday[2];
//     let threeDate = new Date(response.forecast.forecastday[2].date);
//     let sectionThree = "";
//     sectionThree +=`
//   <div class="Sunday redis-end  text-center p-2 ">
//   <span>${threeDate.toLocaleDateString("en-us",{weekday:"long"})}</span>
// </div>
// <div class="p-3 text-center m-auto pt-5">
//   <img src="${containerThreeCard.day.condition.icon}" alt="sun">
//   <div>
//     <span class="fs-4 fw-bolder"><span>${containerThreeCard.day.maxtemp_c}</span><sup>o</sup>C</span>
//     <p>${containerThreeCard.day.mintemp_c}<sup>o</sup></p>
//     <p class="Sunny">${containerThreeCard.day.condition.text}</p>
//   </div>
  
// </div>
//   `

//   document.querySelector(".section-three").innerHTML=sectionThree;

//   }
//     // getCardOn()














    "use strict"
// selecting form input 
    let searchInput = document.querySelector(".search");

// selecting section one element
    let weekDay = document.querySelector("#weekDay");
    let numberDay = document.querySelector("#number-day");

// let monthDay = document.querySelector("#month");
    let city = document.querySelector("#city");
    let highestTemperature = document.querySelector("#highest-temperature");
    let weatherCondition =document.querySelector("#weather-condition");
    let imageWeather =document.querySelector("#image-temperature");
    let WindStrong =document.querySelector("#Wind-strong");
    let windSpeed =document.querySelector("#wind-speed");
    let windDirection =document.querySelector("#wind-direction");

// selecting section tow and three element

    let nextWeekDay=document.querySelectorAll(".week-day");
    let imageNextDay=document.querySelectorAll("#image-next-day");
    let nextHighestTemperature =document.querySelectorAll(".next-highest-temperature");
    let minemumTempreature =document.querySelectorAll(".minemum-tempreature");
    let nextWeatherCondition =document.querySelectorAll(".weather-condition");


// function of a  one card
     
    function getWeatherCardOne(collback){

        console.log(new Date());
        let dateCardOne = new Date(collback.forecast.forecastday[0].date)
        weekDay.innerHTML=dateCardOne.toLocaleDateString("en-us",{weekday:"long"})
        numberDay.innerHTML=dateCardOne.getDate()+" "+dateCardOne.toLocaleDateString("en-us",{month:"long"});
        city.innerHTML= collback.location.name;
        highestTemperature.innerHTML= collback.current.temp_c +"<sup>o</sup>c";
        imageWeather.setAttribute("src","https:"+collback.current.condition.icon);
        weatherCondition.innerHTML =collback.current.condition.text;
        WindStrong.innerHTML = collback.current.wind_kph+"%";
        windSpeed.innerHTML = collback.current.wind_mph+"Km/h";
        windDirection.innerHTML = collback.current.wind_dir
    }

// function of a  tow and three card

    function getWeatherCardTow(collback){
        for (let i = 0; i < 2; i++) {
         let dateCard   = new Date(collback[i+1].date)
            nextWeekDay[i].innerHTML = dateCard.toLocaleDateString("en-us",{weekday:"long"})
            imageNextDay[i].setAttribute("src","https:"+collback[i+1].day.condition.icon);
            nextHighestTemperature[i].innerHTML = collback[i+1].day.maxtemp_c;
            minemumTempreature[i].innerHTML = collback[i+1].day.mintemp_c;
            nextWeatherCondition[i].innerHTML = collback[i+1].day.condition.text;
        }
    }
     
// coll the functions
      async  function getCollIng(tem){
           let apiReturn = await getApi(tem);
           if(!apiReturn.error){
            getWeatherCardOne(apiReturn);
            getWeatherCardTow(apiReturn.forecast.forecastday);
           }
        }
        getCollIng();


// function fetch Api 
    async function getApi(tem="egypt"){
        let response =  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7b0011f590fd432bafe210203241203&q=${tem}&days=3`);
        let responseJson= await response.json()
        return responseJson;
    }

    
// add name city or country 
    searchInput.addEventListener("keyup",async function(e){
        await getCollIng(this.value);
    });


