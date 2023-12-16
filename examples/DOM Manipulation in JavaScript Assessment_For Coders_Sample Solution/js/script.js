function loadProjects() {
  var projectObjects = projects;
  console.log(projectObjects);

  var projectsElement = document.getElementById("projects");
  projectsElement.innerHTML = "";

  for (var i=0; i<projectObjects.length; i++) {
    var project = projectObjects[i];
    projectsElement.innerHTML +=
      "<div class='card'>" +
      "<img src='" +
      project["image"] +
      "'>" +
      "<span>" +
      project["title"] +
      "</span>" +
      "<span>" +
      project["description"] +
      "</span>" +
      "</div>";
  }
}


// This function should return the projectId of the new project
function newProjectId(){
  if (projects == null) {
    return 1;
  } else {
    return projects.length + 1;
  }

}

function saveNewProject() {

  // Get the new project details by using the DOM elements
  var title = document.getElementById("title").value;
  var description = document.getElementById("desc").value;
  var image = document.getElementById("image").value;

  console.log(title, description, image)

  // Create the new projectId by calling the newProjectId() function
  var newId = newProjectId()
  
  // Create a new project Object
  var newProjectObject = {
    id: newId,
    title: title,
    description: description,
    image: image,
  };

  // Add the new project object to the projects Object 
  projects.push(newProjectObject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
