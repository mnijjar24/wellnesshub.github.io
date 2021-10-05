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
}

function nutritionPlan() {
    searchBmiOutput.classList.add('hide');
    searchNutritionPlan.classList.remove('hide');
}

function exercisePlan() {
    searchBmiOutput.classList.add('hide');
    searchExercisePlan.classList.remove('hide');
}