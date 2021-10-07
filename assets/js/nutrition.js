var buttonEl = document.querySelector(".nutrButton");

var results = document.querySelector('div, #responseContainer');
var div = document.querySelector('div, #nutritionEl');


async function getNutrition (nutritionEl) {
    var url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?q=' + nutritionEl;
    const response = await fetch (url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "309d42ad39msh977d996bac5e217p196e93jsn86906d3f68ef"
        },
    });
    const nutrData = await response.json();
    console.log(nutrData);

    results.insertBefore(nutritionEl, div);
}

buttonEl.addEventListener("click", getNutrition);
