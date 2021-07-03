var calculateBtn = document.querySelector("ion-button");
var heightInput = document.getElementById('height-input');
var weightInput = document.getElementById('weight-input');
var result = document.getElementById('result');
var calculateBmi = function () {
    var heightVal = +heightInput.value;
    var weightVal = +weightInput.value;
    alert(heightVal);
    alert(weightVal);
    var bmi = weightVal / (weightVal * heightVal);
    console.log(bmi);
    result.textContent = bmi.toString();
};
calculateBtn.addEventListener('click', calculateBmi);
