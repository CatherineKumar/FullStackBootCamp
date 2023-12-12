// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

//COMPLETE YOUR CODE HERE 
function checkEven (n)
{
    return n % 2 == 0;
}

function filterEvens (arr, checkfn)
{
    var len;
    var newArr = new Array()
    len = arr.length;
    for(let i=0; i<len; i++)
    {
        if ( checkfn(arr[i]))
        {
            newArr.push(arr[i])
        }
    }
    return newArr
}

var numList = [23,41,4,16,1,7,2]
var newList

newList = filterEvens(numList,checkEven)
console.log (newList)

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

//COMPLETE YOUR CODE HERE 
(function (num) {
    var result;
    if (num === 0 || num === 1)
    {
        console.log(1)
    }
    
    for (var i = num - 1; i >= 1; i--) {
      num = num * i; 
    }
    console.log(num); 
  })(5)


//3. Implement a function "calculate" that takes three arguments: a, b, and an operation function. 
//The operation function should accept two parameters and perform a specific mathematical operation like addition, subtraction, multiplication and division. 
//Use call(), apply(), or bind() to apply the operation function to the arguments a and b.

function add(x,y)
{
    return x+y;
}

function calculate( a, b, fn)
{
    return fn(a,b)
}


console.log( calculate.call(this, 1, 2,add) )


//COMPLETE YOUR CODE HERE 

//4. Given an array of person objects, define a function to find oldest person object.

var persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
//COMPLETE YOUR CODE HERE 

function findOldest (personArr)
{
    var high = 0
    var pos

    for (var i = 0; i < personArr.length; i++) 
    {
        //checking high
        if (personArr[i].age > high)
        {
            high = personArr[i].age;
            pos = i;
        }
    }
    return personArr[pos]
}
 console.log( findOldest(persons) )

//5.  Create a function that calculates the sum of an array using IIFE function.

//COMPLETE YOUR CODE HERE 

let result = (function (numLIst)
{
    var sum = 0

    for( i=0; i<numLIst.length; i++)
    {
        sum += numLIst[i]
    }
    return sum
})([10,20,30])

console.log( result )

//6. Write a function printContext that, when invoked, logs the this keyword to the console. Then, demonstrate how the context of a function can change when calling it with different objects using the call method.

//COMPLETE YOUR CODE HERE 
function printContext() {
    console.log(this) ;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
    
  printContext.call(obj1);
  printContext.call(obj2);

console.log(this)
//7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

//COMPLETE YOUR CODE HERE 
function multiply (a,b)
{
  return a*b
}

console.log( multiply(3,5))

const double = multiply.bind(null,2);

console.log( double(7))

// 8. Create an object person with properties name and age. Write a function "introduce" that logs a message introducing the person. Then, use the call method to invoke the introduce function with the person object as the context.

//COMPLETE YOUR CODE HERE 
function introduce() {
    console.log("Hello! My name is", this.name + ".");
  }
  
const person = {
    name: "John",
    age: 24,
  };
  
 introduce.call(person); 
  
// 9. Write a higher order function createMultiplier that takes a factor as an argument and returns another functiom that multiplies a number by that factor. 

//COMPLETE YOUR CODE HERE 

function createMultiplier(factor)
{
    var result = new Function("x",  "return x * " + factor)
    return result
}

console.log( createMultiplier(4)(6))

// 10. Write a function called "calculate" that adds two numbers and assign a property "description" to it with a string describing what the function does. Then, access and log this property.

//COMPLETE YOUR CODE HERE 
