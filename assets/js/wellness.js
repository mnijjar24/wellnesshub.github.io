var searchBmiForm = document.querySelector('#BMI-form');
var searchBmiOutput = document.querySelector('#BMI-suggestions');
var searchNutritionPlan = document.querySelector('#nutrition');
var searchExercisePlan = document.querySelector('#exercise');
var searchFirstNameTextBox = document.querySelector('#fname');
var searchLastNameTextBox = document.querySelector('#lname');
var searchGenderDropDown = document.querySelector('#gender');
var searchAgeTextBox = document.querySelector('#age');
var searchHeightTextBox = document.querySelector('#height');
var searchWeightTextBox = document.querySelector('#weight');
var searchfoodPreferenceDropDown = document.querySelector('#foodPreference');
var searchobjectDropDown = document.querySelector('#object');
var bmiValueLabel = document.querySelector('#bmiValue');
var bmiCategoryLabel = document.querySelector('#bmiCategory');
var submitButton = document.querySelector('#submitButton');

function bmiHeatMap() {
    searchBmiForm.classList.add('hide');
    searchBmiOutput.classList.remove('hide');
    var firstName = searchFirstNameTextBox.value;
    console.log(firstName);
    var lastName = searchLastNameTextBox.value;
    console.log(lastName);
    var gender = searchGenderDropDown.value;
    console.log(gender);
    var age = searchAgeTextBox.value;
    console.log(age);
    var height = searchHeightTextBox.value;
    console.log(height);
    var weight = searchWeightTextBox.value;
    console.log(weight);
    var foodPreference = searchfoodPreferenceDropDown.value;
    console.log(foodPreference);
    var object = searchobjectDropDown.value;
    console.log(object);
    bmi(weight / 2.2, height / 100);
}

function checkEmpty() {
    var firstName = searchFirstNameTextBox.value;
    if (firstName.trim() !== "") {
        submitButton.disabled = false;
    }
}

function nutritionPlan() {
    searchBmiOutput.classList.add('hide');
    searchNutritionPlan.classList.remove('hide');
}

function exercisePlan() {
    searchBmiOutput.classList.add('hide');
    searchExercisePlan.classList.remove('hide');
}

// The BMI Calculation API. This API spits out the number.
async function bmi(weight, height) {
    var url =
        'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=' +
        weight +
        '&height=' +
        height;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
            'x-rapidapi-key': '536b4b7d46msh58b39d99e9801fep13daafjsn88287e5fde13',
        },
    });

    const bmiResponse = await response.json();

    console.log(bmiResponse);
    console.log(bmiResponse.bmi.toFixed(2));
    bmiValueLabel.innerHTML = bmiResponse.bmi.toFixed(2);
    getCategory(bmiResponse.bmi);
}

// This is the Category base don the BMI putput.
async function getCategory(bmi) {
    var url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=' + bmi;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
            'x-rapidapi-key': '536b4b7d46msh58b39d99e9801fep13daafjsn88287e5fde13',
        },
    });

    const bmiResponse = await response.json();
    const bmiCategory = bmiResponse.weightCategory;
    bmiCategoryLabel.innerHTML = bmiCategory;
    console.log(bmiCategory);
}