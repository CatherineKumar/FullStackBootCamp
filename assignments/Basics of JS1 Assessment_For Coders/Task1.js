/*
1.7. Write a program that checks if a given character, `char`, is a vowel or a consonant.
1.8. Write a program that determines the largest among three numbers, `num1`, `num2`,
and `num3`.
1.9. Write a program that determines the sign of a given number, `num` (positive, negative,
or zero), using the ternary operator.
1.10. Write a program that determines the grade based on a given percentage, `percentage`.
Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).
*/

/*
1.1. Create a variable `isHappy` and assign it a boolean value based on the value of the given
String variable `action`, whether it is `Smile` or not.
*/

var action
var isHappy
action = 'Smile'

if ( action ==  'Smile')
{
    isHappy = true
}
else
{
    isHappy = false
}

console.log('1.1 isHappy = ' + isHappy)

/*
1.2. Create a variable `favoriteSubjects` and assign it an array of strings representing your
favorite subjects.
*/

const favoriteSubjects = ["World History", "Foreign Language", "Math", "Software Development"];

console.log( '1.2 favoriteSubjects = ' + favoriteSubjects )

/*
1.3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is
greater than or equal to `num2`.
*/

var num1
var num2

num1 = 60
num2 = 50

if (num1 >= num2)
{
    console.log('1.3 ' + 'num1 is greater than or equal to num2')
}
else
{
    console.log('1.3 ' + 'num1 is not greater than or equal to num2')
}

/*
1.4. Write a program to calculate the square of a given number, `num`.
*/

var num
var result

num = 3
result = num ** 2

console.log('1.4  The square of ' + num + ' equals ' + result)

/*
1.5. Write a program to check if a given number, `num`, is even or odd.
*/

var num
var isEven

num = 6

isEven = num % 2 == 0 ? true : false

if (isEven)
{
    console.log('1.5 num ' + num + ' is even')
}
else
{
    console.log('1.5 num ' + num +' is odd')
}

/*
1.6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or
divisible by 4 but not divisible by 100.
*/

var year
var isLeapYear

year = 2024

if ( (year % 400 == 0) ||
     ( year % 4 == 0 && year % 100 != 0  )
   )
{
    isLeapYear = true
}
else
{
    isLeapYear = false
}

console.log ('1.6 Year ' + year + ', isLeapYear = ' + isLeapYear)