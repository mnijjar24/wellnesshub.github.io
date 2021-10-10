var buttonEl = document.querySelector(".nutrButton");

//var results = document.querySelector('div, #responseContainer');
//var div = document.querySelector('div, #nutritionEl');

var nutrValueLabel = document.querySelector('#nutrValue');


async function getNutrition(nutritionEl) {
    var url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?q=' + nutritionEl;
    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "309d42ad39msh977d996bac5e217p196e93jsn86906d3f68ef"
        },
    });

    const nutrResponse = await response.json();
    console.log(nutrResponse);

    const nutrCategory = nutrResponse.items;
    console.log(nutrCategory);
    //console.log(nutrResponse.getNutrition);
    nutrValueLabel.innerHTML = '';
    //nutrResults.innerHTML = nutrResponse.getNutrition;

    for (let i = 0; i < nutrCategory.length; i++) {
        let singleItem = nutrCategory[i];

        let value = singleItem.value.replace(/\\/g, '');
        console.log(JSON.parse(value));
        let parseObject = JSON.parse(value);
        console.log();

        //add a fetch and get response, convert response data using response.json(), store response.json() inside singleRecipe, console.log(singleRecipe.recipes[0].url)
        nutrValueLabel.innerHTML += `<p>${parseObject.title}</p><img src="https://spoonacular.com/recipeImages/${parseObject.id}-240x150.jpg" className="recipe-image" />`
            //nutrValueLabel.innerHTML += singleItem.value.id;

        // this new fetch needs to go after the response.json() single recipe, make sure to replace the id in the new fetch request from 2nd % onwards with this "${parseObject.id}-240150.jpg"
    }
}

buttonEl.addEventListener("click", getNutrition);

var nutritionSection = document.querySelector('.hide');
var searchBmiOutput = document.querySelector('#BMI-suggestions');
var searchOutput = document.querySelector('#back');
var output = document.querySelector('#nutritionEl');
var button = document.querySelector('.nutrButton');
var plan = document.querySelector('.nutrPlan');
var container = document.querySelector('#responseContainer');


function backButton() {
    searchBmiOutput.classList.add('hide');
    nutritionSection.classList.remove('hide');
    searchOutput.classList.add('hide');
    output.classList.add('hide');
    button.classList.add('hide');
    plan.classList.add('hide');
    container.classList.add('hide');
}


// function backButton(){
//     // document.querySelector('.backButton').
//     window.history.back();
// }


// let backClick = document.querySelector('backButton');
// backClick.addEventListener('click', () => {
//     window.history.back
// });

// var back=document.getElementById('back');

// function backButton(){

//     if(text.classList==='newClass'){
//         text.classList.remove('newClass')
//     }
//     else{
//         text.classList.add('newClass');
//     }
// }