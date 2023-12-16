// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() 
{
    // Write your code here

    var projectArr = projects
    var numProjects = projectArr.length

    var projectsElement = document.getElementById("projects")
    projectsElement.innerHTML = ""

    for (var i=0; i < numProjects; i++) 
    {
        var project = projectArr[i];
        projectsElement.innerHTML +=
            "<div class='card'>" +
            "<img src='" +project["image"] +"'>" +
            "<span>" + project["title"] + "</span>" +
            "<span>" + project["description"] + "</span>" +
            "</div>"
    }
}


// This function should return the projectId of the new project
function newProjectId()
{
    // Write code to create and return new Project Id
    if (projects != null) 
    {
        return projects.length + 1;
    } 
    else 
    {
        return 1;
    }
}

function saveNewProject() 
{

    // Write your code here
    // Get the new project details by using the DOM elements
    var title = document.getElementById("title").value
    var description = document.getElementById("desc").value
    var image = document.getElementById("image").value

    // Create the new projectId by calling the newProjectId() function
    var index = newProjectId()

    // Create a new project Object
    var newProjectObj = {
       id: index,
       title: title,
       description: description,
       image: image,
    }

    // Add the new project object to the projects array 
    projects.push(newProjectObj)

    // Load the projects after adding the new project
    loadProjects();

    // Clear the values of the New Project Details Form after adding the new project
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image").value = "";
}
