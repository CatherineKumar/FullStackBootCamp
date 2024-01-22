const recipes = [];

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
    indexOfRecipeToBeEdited = findRecipe(title)

    if (indexOfRecipeToBeEdited < 0)
    {
        isEditMode = false
        addRecipe({title,ingredients,instructions })
    }
    else{
        isEditMode = true
        editRecipe (indexOfRecipeToBeEdited)
    }
    displayRecipes()
    clearInputFields();
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

}

// Display Recipes
function displayRecipes() {
    // Write your code here for task 4
    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';
   
    recipes.forEach((recipe) => {
       let li = null;
       let li2 = null;
       let li3 = null
       let li4 = null

       let br = null
       br = document.createElement("span");
       br.innerHTML = "<br/>";

       li = document.createElement('li')
       const{title,ingredients,instructions} = recipe 
       li.innerText = `${title}`
      
       li2 = document.createElement('li')
       li2.innerText = `Ingredients: ${ingredients}`

       li3 = document.createElement('li')
       li3.innerText = `Instructions: ${instructions}`

      // li4 = document.createElement('li');
       let button_edit = document.createElement("button");
       button_edit.innerHTML = "Edit";
       button_edit.setAttribute("id","button_edit_" + recipe.title);
    
       let button_delete = document.createElement("button");
       button_delete.innerHTML = "Delete";
       button_delete.setAttribute("id","button_delete_" + recipe.title);

       recipeList.appendChild(li)
       recipeList.appendChild(li2)
       recipeList.appendChild(li3)

       let ul = document.createElement("ul");
       li4 = document.createElement("li");
       li4.appendChild(button_edit);
       li4.appendChild(button_delete)
       ul.appendChild(li4);
       recipeList.appendChild(ul)



       br = document.createElement("span");
       br.innerHTML = "<br/>";
       recipeList.appendChild(br);       
     });

}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
    recipes[index].ingredients = document.getElementById("ingredients").value
    recipes[index].instructions = document.getElementById("instructions").value
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

// Return index of recipe
function findRecipe (title)
{
    let index
          
    index = recipes.findIndex(x => x.title === title);
      
    return index;
}