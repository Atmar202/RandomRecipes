document.addEventListener("DOMContentLoaded", function(){
    const url = "https://api.spoonacular.com/recipes/random?apiKey=3952edd687804cf59992b211ff4e4788";
    var i = 0;

    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data.recipes);
        const recipe = data.recipes;
        const length = recipe[0].extendedIngredients.length;
        const ingredients = recipe[0].extendedIngredients;

        const title = recipe[0].title;
        const image = recipe[0].image;
        const summary = recipe[0].summary;
        const instructions = recipe[0].instructions;

        let str = '';
        ingredients.forEach(element => {
            str += `
        <div class="border">
        <p class="title">${recipe[0].extendedIngredients[i].aisle}</p>
            Amount: ${recipe[0].extendedIngredients[i].amount}
            <br>
            Unit: ${recipe[0].extendedIngredients[i].measures.us.unitShort}
            <br>
            Measurements: ${recipe[0].extendedIngredients[i].measures.metric.amount} 
            ${recipe[0].extendedIngredients[i].measures.metric.unitShort}
        </div>
            `
            i++;
            });

        let html = `
        <div class="container">
        <img src="${image}" id="image">
        <br>
        <h2>${title}</h2>
        <h3>Total Ingredients: ${length}</h3>
        <h3>Ingredients:</h3> ${str}
        <br>
        <div class="summary-border">
        <h1 id="title-1">Summary:</h1>
        ${summary}
        </div>
        <br>
        <div class="instructions-border">
        <h1 id="title-1">Instructions:</h1>
        ${instructions}
        </div>
        </div>
        `;
        document.body.innerHTML = html;
    })
});

// Title
// extendedIngredients[] -> name -> amount -> units -> measures (in metric) -> amount -> unitShort
// image
// summary
// instructions