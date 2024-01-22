const recipes = [];

const recipeObj = {};

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1

// Declared a flag to set the edit mode
var isEditMode = false

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    // Write your code here for task 1
    //alert('This works');
    let title
    let ingredients
    let instructions

    title = document.getElementById("title").value
    ingredients = document.getElementById("ingredients").value
    instructions = document.getElementById("instructions").value
    addRecipe({title,ingredients,instructions })
});

// Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 2
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Write your code here for task 3
    recipes.push(recipe);
    displayRecipes()
    clearInputFields();
}

// Display Recipes
function displayRecipes() {
    // Write your code here for task 4
    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';
   
    recipes.forEach((recipe) => {
       let div = document.createElement('div');
       let ul = document.createElement('ul');
       let li = null;
       let li2 = null
       let subLi = null; 
       let br = null
       br = document.createElement("span");
       br.innerHTML = "<br/>";


       li = document.createElement('li')
       const{title,ingredients,instructions} = recipe 
       li.innerText = `${title}`
       li.appendChild(br)
       li2 = document.createElement('li')
       li2.innerText = `Instructions: ${instructions}`
   
       let subOl = document.createElement('ul')
       separatedArray = ingredients.split(',');

       for (let i in separatedArray )
       {
           let ingredientValue = separatedArray[i];
           subLi = document.createElement('li');
           subLi.innerText = ingredientValue;
           subOl.appendChild(subLi);
       }
       
       li.appendChild(subOl);
       recipeList.appendChild(li)

       ul.appendChild(li2)
       recipeList.appendChild(ul)

       br = document.createElement("span");
       br.innerHTML = "<br/>";
       recipeList.appendChild(br);       
     });

}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
        console.log(recipes)
        clearInputFields();
        isEditMode = false;
    }
}