//1. Create a variable `isHappy` and assign it a boolean value based on the value of the given String variable `action`, whether it is `Smile` or not.

var action = "Smile"
//COMPLETE THE CODE HERE
var isHappy

if ( action ==  'Smile')
{
    isHappy = true
}
else
{
    isHappy = false
}

console.log('1.1 action = ' + action + ', isHappy = ' + isHappy)


// 2. Create a variable `favoriteSubjects` and assign it an array of strings representing your favorite subjects.

//COMPLETE THE CODE HERE
const favoriteSubjects = ["World History", "Foreign Language", "Math", "Software Development"];

console.log( '1.2 favoriteSubjects = ' + favoriteSubjects )


// 3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is greater than or equal to `num2`.

var num1 = 10;
var num2 = 5;
//COMPLETE THE CODE HERE

if (num1 >= num2)
{
    console.log('1.3 ' + 'num1 is greater than or equal to num2')
}
else
{
    console.log('1.3 ' + 'num1 is not greater than or equal to num2')
}

// 4. Write a program to calculate the square of a given number, `num`.

var num = 4;
//COMPLETE THE CODE HERE
var result

result = num ** 2

console.log('1.4  The square of ' + num + ' equals ' + result)

// 5. Write a program to check if a given number, `num`, is even or odd.

var num = 7;
//COMPLETE THE CODE HERE
var isEven

isEven = num % 2 == 0 ? true : false

if (isEven)
{
    console.log('1.5 num ' + num + ' is even')
}
else
{
    console.log('1.5 num ' + num +' is odd')
}


// 6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or divisible by 4 but not divisible by 100.

var year = 2024;
//COMPLETE THE CODE HERE
var isLeapYear

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


// 7. Write a program that checks if a given character, `char`, is a vowel or a consonant.

var char = "a";
//COMPLETE THE CODE HERE
var isAlpha;
var isVowel;
var charUppser;
let regexAlpha = /^[a-zA-Z]+$/; 
var result;

charUppser = char.toUpperCase();
isAlpha = regexAlpha.test(char);

isVowel = charUppser == "A" || charUppser == "E" || charUppser == "I" || charUppser == "O" || charUppser == "U"

if( isAlpha && isVowel)
{
    result = 'vowel'
}
else if (isAlpha && !isVowel)
{
    result = 'consonant'
}
else if (!isAlpha)
{
    result = 'non alpha'
}

console.log( '1.7 character ' + char + ', '+ result )

// 8. Write a program that determines the largest among three numbers, `num1`, `num2`, and `num3`.

var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
//COMPLETE THE CODE HERE
function maxValue ()
{
    // find highest number
    var len = arguments.length;
    var max = -Infinity;
    var i;
    for (i = 0; i < len; i++) 
    {
        if (arguments[i] > max) 
        {
            max = arguments[i]; 
        }
    }
    return max
}

largest = maxValue(num1,num2,num3)
console.log('1.8 Largest value = ' +largest)


// 9. Write a program that determines the sign of a given number, `num` (positive, negative, or zero), using the ternary operator.

var num = -5;
//COMPLETE THE CODE HERE  

var sign

sign = num == 0 ? 'zero' : num < 0 ? 'negative' : 'positive'

console.log('1.9 num ' + num + ' is ' + sign)

// 10. Write a program that determines the grade based on a given percentage, `percentage`. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

var percentage = 85;
//COMPLETE THE CODE HERE
var letterGrade


if ( percentage >= 90 )
{
    letterGrade = 'A'
}
else if ( percentage >= 80 )
{
    letterGrade = 'B'
}
else if ( percentage >= 70 )
{
    letterGrade = 'C'
}
else if ( percentage >= 60 )
{
    letterGrade = 'D'
}
else if ( percentage >=0 )
{
    letterGrade = 'F'
}

console.log( '1.10 Percentage = ' + percentage + ', Letter Grade = ' + letterGrade)
