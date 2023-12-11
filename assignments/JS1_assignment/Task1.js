
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

console.log('1.1 action = ' + action + ', isHappy = ' + isHappy)

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

result = num ** 2

console.log('1.4  The square of ' + num + ' equals ' + result)

/*
1.5. Write a program to check if a given number, `num`, is even or odd.
*/

var num
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

/*
1.6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or
divisible by 4 but not divisible by 100.
*/

var year
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

/*
1.7. Write a program that checks if a given character, `char`, is a vowel or a consonant.
*/

function isVowel(ch) {

    var result;
    var ch_upper;

    ch_upper = ch.toUpperCase()

    result = ch_upper == "A" || ch_upper == "E" || ch_upper == "I" || ch_upper == "O" || ch_upper == "U"
    return result
}

var x

x = 'A'

console.log( '1.7 character ' + x  +', isVowel = ' + isVowel(x) )

/*
1.8. Write a program that determines the largest among three numbers, `num1`, `num2`,
and `num3`.
*/

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

var max
var num1, num2, num3

num1 = 2
num2 = -1
num3 = 4

max = maxValue(num1,num2,num3)
console.info('1.8 Max value = ' + max);

/*
1.9. Write a program that determines the sign of a given number, `num` (positive, negative,
    or zero), using the ternary operator.
*/

var num
var sign

num = 5
sign = num == 0 ? 'zero' : num < 0 ? 'negative' : 'positive'

console.log('num ' + num + ' is ' + sign)

/*
1.10. Write a program that determines the grade based on a given percentage, `percentage`.
Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).
*/

var percentage
var letterGrade

percentage = 70

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

console.log( 'Percentage =' + percentage + ' Letter Grade = ' + letterGrade)
