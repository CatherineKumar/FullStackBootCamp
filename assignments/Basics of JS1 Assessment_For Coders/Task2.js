/*


2.3. Write a function that takes an array of product prices and returns the total price. You can
assume that the array contains only numbers.
2.4. Write a function that takes an array of product prices and a discount percentage. Apply
the discount to each product price and return the updated prices as an array.
2.5. Write a function that takes an array of product quantities and returns an array of indices
for products that are out of stock (quantity is 0).
2.6. Write a program to print the multiplication table of 7.
2.7. Write a function to calculate the factorial of a number.
2.8. Write a function to generate a Fibonacci series. Fibonacci Series is a sequence of
numbers in which each number is the sum of the two preceding ones. It starts with 0
and 1.
2.9. Write a function to print a star-pattern triangle. The function should take the number of
rows as an argument.
2.10. Write a function to reverse a string.
*/

/*
2.1. Write a program that determines the type of triangle based on the lengths of its sides
(`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and
scalene.
*/
function triangleType (side1, side2, side3)
{
    var trianbleType

    if ( side1== side2 && side2 == side3)
    {
        trianbleType = 'equilateral'
    }
    else if (
        ( side1 == side2 && side1 != side3 ) ||
        ( side1 == side3 && side1 != side2 ) ||
        ( side2 == side3 && side2 != side1 )
    )  
    {
        trianbleType = 'isosceles'
    }
    else 
    {
        trianbleType = 'scalene'
    }

    return trianbleType
}

console.log (    triangleType(1,2,3)    )



/*
2.2. Write a JavaScript program that counts the number of occurrences of a specific element
in an array using a for...of loop.
*/

/*
   function countOf - counts the occurences of a specific element (val) in an array
   parameters: val, array using spread operator
   return value: number of occurences of val in the array
*/ 
function countOf (val)
{
    // find highest number
    var len = arguments.length;
    var count = 0;
    var i;
    for (i = 1; i < len; i++) 
    {
        if (arguments[i] == val ) 
        {
            count++
  
        }
    }
    return count
}

var numbers = [5, 7, 3,5,5];


console.log( countOf(6, ...numbers) )
