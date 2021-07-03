const calculateBtn = document.querySelector("ion-button");
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const result =  document.getElementById('result');

const calculateBmi = () => {
    const heightVal = +(<HTMLInputElement>heightInput).value;
    const weightVal = +(<HTMLInputElement>weightInput).value;

    //alert(heightVal);
    //alert(weightVal);

    const bmi = weightVal / (weightVal * heightVal);

    console.log(bmi);

    result.textContent = bmi.toString();
};

calculateBtn.addEventListener('click', calculateBmi);
