var buttonEl = document.querySelector(".nutrButton");

//var results = document.querySelector('div, #responseContainer');
//var div = document.querySelector('div, #nutritionEl');

var nutrValueLabel = document.querySelector('#nutrValue');


async function getNutrition (nutritionEl) {
    var url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?q=' + nutritionEl;
    const response = await fetch (url, {
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

    for (let i=0; i < nutrCategory.length; i++) {
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
