document.addEventListener("DOMContentLoaded", function(){
    const url = "https://api.spoonacular.com/recipes/random?apiKey=3952edd687804cf59992b211ff4e4788";
    console.log("test");

    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data.recipes);
        const recipe = data.recipes;
        const length = recipe[0].extendedIngredients.length;
        //foreach tuleb teha, et lugeda välja kõik massiivid
        const ingredients = recipe[0].extendedIngredients;

        // Muutujad, et lisada kujundus neile
        const title = recipe[0].title;
        const image = recipe[0].image;
        const summary = recipe[0].summary;
        const instructions = recipe[0].instructions;

        console.log(title);
        let html = `
        <img src="${image}">
        <br>
        Title: ${title}
        <br>
        Total Ingredients: ${length}
        <br>
        Ingredients: ${ingredients}
        <br>
        Summary: ${summary}
        <br>
        Instructions: ${instructions}
        `;
        document.body.innerHTML = html;
    })
});

// Title
// extendedIngredients[] -> name -> amount -> units -> measures (in metric) -> amount -> unitShort
// image
// summary
// instructions

// https://github.com/Atmar202/JavaScript-Sandbox/blob/master/js/app.js
// Kujundus luua BootStrap'iga