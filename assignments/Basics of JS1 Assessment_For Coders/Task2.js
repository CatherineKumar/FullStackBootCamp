// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and scalene.

var side1 = 5;
var side2 = 5;
var side3 = 8;
var triangleType;
//COMPLETE THE CODE HERE

function findTriangleType (side1, side2, side3)
{
    var result

    if ( side1== side2 && side2 == side3)
    {
        result = 'equilateral'
    }
    else if (
        ( side1 == side2 && side1 != side3 ) ||
        ( side1 == side3 && side1 != side2 ) ||
        ( side2 == side3 && side2 != side1 )
    )  
    {
        result = 'isosceles'
    }
    else 
    {
        result = 'scalene'
    }

    return result
}

triangleType = findTriangleType(side1, side2, side3)
console.log('2.2 ' + triangleType)

// 2. Write a JavaScript program that counts the number of occurrences of a specific element in an array using a for...of loop.

function countOccurrences(arr, target) {
  //COMPLETE THE CODE HERE
    var len = arr.length;
    var count = 0;
    var i;
    for (i = 0; i < len; i++) 
    {
        if (arr[i] == target )
        {
            count++
        }
    }
    return count
}
  
  var numbers = [1, 2, 3, 2, 4, 2, 5];
  console.log(countOccurrences(numbers, 2)); 


// 3. Write a function that takes an array of product prices and returns the total price. 
//You can assume that the array contains only numbers.

function calculateTotalPrice(prices) {
  //COMPLETE THE CODE HERE
    var len = prices.length;
    var total = 0;
    var i;
    for (i = 0; i < len; i++) 
    {
        total += prices[i]
    }
    return total
}

// Example usage:
var productPrices = [10, 20, 30, 40];
console.log(calculateTotalPrice(productPrices)); 


// 4. Write a function that takes an array of product prices and a discount percentage. 
//Apply the discount to each product price and return the updated prices as an array.

function applyDiscount(prices, discount) {
  //COMPLETE THE CODE HERE
    var discountPercent
    var discountPrices = new Array()

    if ( discount >= 1 && discount <= 100 )
    {
        discountPercent = discount / 100
    } else if ( discount >= 0 && discount < 1)
    {
        discountPercent = discount
    }
    else
    {
        discountPercent  = 0
    }

    var len = prices.length;
    var i;
    for (i = 0; i < len; i++) 
    {
        discountPrices.push((1-discountPercent) * prices[i])
    }
    return discountPrices  
}

// Example usage:
var productPrices = [10, 20, 30, 40];
var discountPercentage = 20;
console.log(applyDiscount(productPrices, discountPercentage)); 

// 5. Write a function that takes an array of product quantities and 
//returns an array of indices for products that are out of stock (quantity is 0).

function getOutOfStockProducts(quantities) {
  //COMPLETE THE CODE HERE
  var itemsOutOfStock = new Array()
  var len = quantities.length;
  var i;
  for (i = 0; i < len; i++) 
  {
     if (quantities[i]== 0)
     {
          itemsOutOfStock.push (i)
     } 
  }
  return itemsOutOfStock

}

// Example usage:
var productQuantities = [2, 0, 4, 0, 3];
console.log(getOutOfStockProducts(productQuantities)); 

// 6. Print the multiplication table of 7
// It should be in the format: 
// 7 * 1 = 7

// WRITE THE CODE HERE
function multiplicationTable( num, maxMultiplier)
{
    var i;
    var result;
    if (maxMultiplier <= 0)
    {
        return
    }    

    for ( i=1; i<=maxMultiplier; i++)
    {
        result = 7*i;
        console.log( num + ' * ' + i + ' = ' + result)
    }
    return

}

multiplicationTable(7,12)


// 7. Create a function to calculate factorial of a number.
// Assume that the input is an integer
// Example: Factorial of 5 = 120

function calculateFactorial(n) {
// COMPLETE THE CODE HERE
    var result;
    var i;

    if (n < 0)
    {
        result = 'Input must be a positive integer'
    }
    else if (n == 0)   
    {
        result = 1
    }
    else{
        result = 1
        for (i = 1; i <= n; i++)
        {
            result = result * i
        }
    }
    return result
}

// Example Usage
console.log(calculateFactorial(0));     // Should print 1
console.log(calculateFactorial(5));     // Should print 120
console.log(calculateFactorial(10));    // Should print 3628800
console.log(calculateFactorial(-1));    // Should print "Input must be a positive integer"


// 8. Create a function to generate fibonacci series. 
// Fibonacci Series is a sequence of numbers in which each number is the sum of the two preceding ones. It starts with 0 and 1.
// The number of terms of the series should be passed as argument to the function.
// Example: Fibonacci series of 5 terms => 0 1 1 2 3 
// Assume that the inputs are positive integers

function generateFibonacciSeries(numTerms) {
// COMPLETE THE CODE HERE
    var nextTerm
    var num1
    var num2
    var i
    var series = new Array()

    num1 = 0
    num2 = 1

    if (numTerms >= 1)
    {
        series.push(0)
    }
    if (numTerms >=2)
    {
        series.push(1)
    }
    if (numTerms >=3)
    {
        for ( i=1; i<numTerms-1; i++ )
        {
            nextTerm = num1 + num2
            series.push(nextTerm)
            num1 = num2
            num2 = nextTerm
        }
    }
    if (series.length > 0)
    {
        return series
    } 
    else
    {
        return 'Input must be a positive integer'
    }
}

// Example Usage
console.log(generateFibonacciSeries(0));   // Should print "Input must be a positive integer"
console.log(generateFibonacciSeries(1));   // Should print [0]
console.log(generateFibonacciSeries(5));   // Should print [0, 1, 1, 2, 3]
console.log(generateFibonacciSeries(10));  // Should print [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// 9. Create a function to print a star-pattern triangle 
// The function should take number of rows as an argument
// Assume that the argument passed is a positive integer
// The pattern should appear as follows for input = 5
// *
// * *
// * * *
// * * * *
// * * * * *

function printTriangle(rows) {
  // COMPLETE THE CODE HERE
    var i
    var str = ''

    for ( i = 1; i <= rows; i++) { 
        str = '* '; 
        console.log(str.repeat(i)); 
    }    
}  


// Example Usage
printTriangle(5);
printTriangle(7);

// 10. Create a function to reverse a string. 
// Pass a string as an argument.
// Assume that the argument is always a string.

function reverseString(inputString) {
// COMPLETE THE CODE HERE
    var strNew = ''
    var i

    for ( i = inputString.length - 1; i >= 0; i--) 
    { 
        strNew += inputString[i]
    }
    return strNew
}

// Example Usage
console.log(reverseString("Hello, World!"));  // Should print "!dlroW ,olleH"
console.log(reverseString("12345"));          // Should print "54321"
console.log(reverseString(""));               // Should print ""
       
