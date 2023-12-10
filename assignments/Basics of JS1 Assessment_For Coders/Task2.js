/*
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

console.log (    triangleType(1,1,2)    )



/*
2.2. Write a JavaScript program that counts the number of occurrences of a specific element
in an array using a for...of loop.
*/

function countOf (val, list)
{
    var len = list.length;
    var count = 0;
    var i;
    for (i = 0; i < len; i++) 
    {
        if (list[i] == val )
        {
            count++
        }
    }
    return count
}

var numbers = [5, 7, 3,5,5];


console.log( countOf(5, numbers) )

/*
2.3. Write a function that takes an array of product prices and returns the total price. You can
assume that the array contains only numbers.
*/

function totalPrice (items)
{
    var len = items.length;
    var total = 0;
    var i;
    for (i = 0; i < len; i++) 
    {
        total += items[i]
    }
    return total
}


var itemPrices = [5.1, 7, 3.26, 10, 0.50];

console.log( totalPrice( itemPrices) )

/*
2.4. Write a function that takes an array of product prices and a discount percentage. Apply
the discount to each product price and return the updated prices as an array.
*/

function applyDiscount (discount, items)
{
    var discountPercent

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

    var len = items.length;
    var i;
    for (i = 0; i < len; i++) 
    {
        items[i] = (1-discountPercent) * items[i] 
    }
}

var itemPrices = [5.1, 7, 3.26, 10, 0.50];

applyDiscount( 20,itemPrices) 

console.log ( itemPrices )

/*
2.5. Write a function that takes an array of product quantities and returns an array of indices
for products that are out of stock (quantity is 0).
*/

function getOutofStock (items)
{
    var itemsOutOfStock = new Array()
    var len = items.length;
    var i;
    for (i = 0; i < len; i++) 
    {
       if (items[i]== 0)
       {
            itemsOutOfStock.push (i)
       } 
    }
    return itemsOutOfStock
}

var itemQuantities = [0,100,23,0,7]
var itemsOutOfStock = getOutofStock(itemQuantities)
console.log(itemsOutOfStock)

/*
2.6. Write a program to print the multiplication table of 7.
*/

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
        console.log( num + ' X ' + i + ' = ' + result)
    }
    return

}

multiplicationTable(7,12)