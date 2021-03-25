// BMI CALCULATOR
function calcBMI() {
  var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
  document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
} 

// DATE PICKER
const calender = document.querySelector('.datepicker');
M.Datepicker.init(calender,{
  Format:'dd-mmmm-yyyy'
});
      

$('.dropdown-trigger').dropdown();

M.AutoInit();

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
  var upcURL = 'https://cors.bridged.cc/https://api.edamam.com/api/food-database/v2/parser?upc=' + upcValue + '&app_id=' + appID + '&app_key=' + apiKey
  
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
