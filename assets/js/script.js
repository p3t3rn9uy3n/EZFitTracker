// BMI CALCULATOR
var goalWeightEl = document.querySelector('goalweight')
var currentWeightEl = document.querySelector('currentweight')
var weightDifferEl = document.querySelector('weightdiffer')


function calcBMI() {
  var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
  document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
} 



// 
      
var foodItem
var foodImage
var foodName
var foodCal
var upcValue
var upcInput = document.getElementById('enterUPC')
var foodDiv = document.getElementById('foodDiv')
var upcButton = document.getElementById('upcButton')
var foodItemDiv = document.getElementById('foodItemData')

var appID
var apiKey
var upcURL


function pullFoodInfo(event) {
  event.preventDefault();
  console.log(event);
  console.log(upcInput.value)
  upcValue = upcInput.value;

  var appID = 'e5a14e07'
  var apiKey = '6caa294ca6183b8a7cad61a11140987b'
  var upcURL = 'https://api.edamam.com/api/food-database/v2/parser?upc=' + upcValue + '&app_id=' + appID + '&app_key=' + apiKey
  
  fetch(upcURL)
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(data){
    console.log(data)
    foodItem = data.hints
    
  foodImage = foodItem[0].food.image
  foodName = foodItem[0].food.label
  foodCal = foodItem[0].food.nutrients.ENERC_KCAL

  var foodItemHeader = document.createElement('h5');
  foodDiv.appendChild(foodItemHeader);
  foodItemHeader.textContent = foodName;

  var foodItemCal = document.createElement('h5');
  foodDiv.appendChild(foodItemCal);
  foodItemCal.textContent = foodCal + ' Calories';

  var foodItemImg = document.createElement('img');
  foodDiv.appendChild(foodItemImg);
  foodItemImg.setAttribute('src', foodImage)
})
}

upcButton.addEventListener('click', pullFoodInfo)

//Calender and work-out suggestions.
var workRain = ["some Bench press * 10", "a Treadmill for 30 minutes", " some Squats * 10"];
var workClear = ["a 2 mile walk", "a Jog around neighborhood", "go and walk your dog for 30 minutes"];
var workOther = ["100 pushups", "10 pull-ups", "planks for 5 minutes total"]
var currentCity = "Dallas";
var openWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=6dc3e95177ba3d57d7f0c5e07d775d52"
function testWeather() {
  fetch(openWeatherAPI)
    //fetch weather api and confirm that response is good
    .then(function (response) {
      console.log("success")
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var longlatData = data.coord;
      return longlatData;
    })
    .then(function (coordinates) {
      var oneClickUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&exclude=minutely,hourly&appid=6dc3e95177ba3d57d7f0c5e07d775d52";
      fetch(oneClickUrl)
        .then(function (response2) {
          return response2.json();
        })
        .then(function (data2) {
          var myWorkout;
                    // var todayDateEl;
          for (var i = 0; i < 4; i++) {
            var weatherCardEl = document.querySelector("#Day" + i)
            var dailyWeather = data2.daily[i].weather[0].main
            var dailyDtObj = new Date(data2.daily[i].dt * 1000);
            var dailyDate = dailyDtObj.getMonth() + 1 + "/" + dailyDtObj.getDate() + "/" + dailyDtObj.getFullYear();
            if (dailyWeather == "Rain") {
              weatherCardEl.app
              myWorkout = workRain[Math.floor(Math.random() * workRain.length)];
              $(weatherCardEl).append("<h4>"+dailyDate+"<h4>")
              $(weatherCardEl).append("<span>It is raining! Stay inside! Do " + myWorkout+"<span>")
              console.log("It is raining! Stay inside! Do " + myWorkout);
            }
            else if (dailyWeather == "Clear") {
              myWorkout = workClear[Math.floor(Math.random() * workClear.length)];
              $(weatherCardEl).append("<h4>"+dailyDate+"<h4>")
              $(weatherCardEl).append("<span>It's a wonderful day outside! Do " + myWorkout+"<span>")
            }
            else {
              myWorkout = workOther[Math.floor(Math.random() * workOther.length)];
              $(weatherCardEl).append("<h4>"+dailyDate+"<h4>")
              $(weatherCardEl).append("<span>It's a pretty normal day. At home or the gym, do " + myWorkout+"<span>")
            }
          }
          // todayDateEl.innerHTML = new Date(data2.daily[0].dt * 1000);
        })
    })
}
testWeather();