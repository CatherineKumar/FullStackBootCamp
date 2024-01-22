const recipes = [];

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1

// Declared a flag to set the edit mode
var isEditMode = false

function init()
{
    isEditMode = false
    clearInputFields()
}
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

    if ( isEditMode == false)
    {  
        addRecipe({title,ingredients,instructions })
    }
    else{
        recipes[indexOfRecipeToBeEdited].title = document.getElementById("title").value
        recipes[indexOfRecipeToBeEdited].ingredients = ingredients
        recipes[indexOfRecipeToBeEdited].instructions = instructions
    }
    displayRecipes()
    clearInputFields();
}

);


document.getElementById('recipe-list').addEventListener('click', (event) => {
    let title 
    let action

    action = event.target.innerHTML

    if( action === 'Edit' ||  action === 'Delete' )
    {        
        let button = event.target
        title = button.getAttribute('recipeTitle')
        indexOfRecipeToBeEdited = findRecipe (title)

        if (action === 'Delete')
        {
            deleteRecipe(indexOfRecipeToBeEdited) 
        }
        else
        if (action === 'Edit')
        {
            editRecipe(indexOfRecipeToBeEdited)
        }
    }    
})
;




// Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 2
    isEditMode = false
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
       button_edit.style.margin = "1rem";
       button_edit.setAttribute("id","button_edit_" + recipe.title);
       button_edit.setAttribute("recipeTitle", recipe.title);
    
       let button_delete = document.createElement("button");
       button_delete.innerHTML = "Delete";
       button_delete.style.margin = "1rem";
       button_delete.setAttribute("id","button_delete_" + recipe.title);
       button_delete.setAttribute("recipeTitle", recipe.title);

       recipeList.appendChild(li)
       recipeList.appendChild(li2)
       recipeList.appendChild(li3)


       li4 = document.createElement("li");
       li4.appendChild(button_edit);
       li4.appendChild(button_delete)

       recipeList.appendChild(li4) 
     });

}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
    isEditMode = true;
    document.getElementById("title").value = recipes[index].title
    document.getElementById("ingredients").value = recipes[index].ingredients
    document.getElementById("instructions").value = recipes[index].instructions 
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