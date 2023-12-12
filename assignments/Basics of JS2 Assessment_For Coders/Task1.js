// 1. Define and invoke an anonymous function which takes a number and returns its square.
// If input is 2, output should be 4.

//COMPLETE YOUR CODE HERE 
let square = function(n) {
    return n**2;
};

console.log(square(2));

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"

//COMPLETE YOUR CODE HERE 
(function(personName){
    console.log("Hello " + personName + ", Welcome to Great Learning!" );
})("Harry");

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.

//COMPLETE YOUR CODE HERE 
var arr = [2,3,8]

function incrementArray()
{
    for (let i=0; i<arr.length; i++)
    {
        arr[i] += 2;
    }
}

incrementArray();
console.log(arr);

// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.

//COMPLETE YOUR CODE HERE 
let course = {courseName:"Computer Science", durationInMonths:24, level:"Beginner"};
console.log(course)
course.level = "Intermediate"
console.log(course)

// 5. Given an array "students" of JSON objects write a code to iterate through each of these codes and extract first name and last name of each students.

var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

//COMPLETE YOUR CODE HERE 
for( let i=0; i<students.length; i++)
{
    console.log(students[i].firstName, ' ',students[i].lastName )
}

// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array

function doubleNumber(num) {
    return num * 2;
}

//COMPLETE YOUR CODE HERE 

function doubleList( arr, doubleFn)
{
    for( let i=0; i<arr.length; i++)
    {
        arr[i] = doubleFn(arr[i])
    }
}

var list = [3,1,2,3,4]
doubleList( list, doubleNumber)
console.log( list)

// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).

//COMPLETE YOUR CODE HERE 
(function multiplyBy(n,factor) {
    var result = n*factor;
    console.log("Result: "+ result);
    return result;
})(2,5);

//8. Using the `call` method, write a function that finds the maximum number in an array.

//COMPLETE YOUR CODE HERE 
function findMax(arr) {
    var max;

    max = -Infinity;
    for (let i=0; i<arr.length; i++)
    {
        if ( arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max
  }
  
  var list = [1,3,39,2,63,1]

  let result = findMax.call(this, list);
  console.log(result); 

//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.

//COMPLETE YOUR CODE HERE 
var car = {}

console.log(car)
car.make = "Toyota"
car.model = "Camry"

console.log(car)


//10. Given an array "students" of JSON objects define a function displayByKey which takes this array object 
// and a keyName as string and displays the value of the key for each of the JSON objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
//COMPLETE YOUR CODE HERE 

function displayByKey (keyName, objList)
{
    for (let i=0; i<objList.length; i++)
    {
        console.log(objList[i][keyName])
    }
}

displayByKey("firstName", students)