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
var upcInput = '051000012616'

var appID = 'e5a14e07'
var apiKey = '6caa294ca6183b8a7cad61a11140987b'
var upcURL = 'https://api.edamam.com/api/food-database/v2/parser?upc=' + upcInput + '&app_id=' + appID + '&app_key=' + apiKey


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


})

