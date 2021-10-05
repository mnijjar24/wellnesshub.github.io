var searchBmiForm = document.querySelector('#BMI-form');
var searchBmiOutput = document.querySelector('#BMI-suggestions');
var searchNutritionPlan = document.querySelector('#nutrition');
var searchExercisePlan = document.querySelector('#exercise');
var searchFirstNameTextBox = document.querySelector('#fname');
var searchLastNameTextBox = document.querySelector('#lname');
var searchGenderDropDown = document.querySelector('#gender');


function bmiHeatMap() {
    searchBmiForm.classList.add('hide');
    searchBmiOutput.classList.remove('hide');
    var firstName = searchFirstNameTextBox.value;
    console.log(firstName);
    var lastName = searchLastNameTextBox.value;
    console.log(lastName);
    var gender = searchGenderDropDown.value;
    console.log(gender);
}

function nutritionPlan() {
    searchBmiOutput.classList.add('hide');
    searchNutritionPlan.classList.remove('hide');
}

function exercisePlan() {
    searchBmiOutput.classList.add('hide');
    searchExercisePlan.classList.remove('hide');
}