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