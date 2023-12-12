function list(...args) {
    return args;
  }
  
  function addArguments(arg1, arg2) {
    return arg1 + arg2;
  }
  
  console.log(list(1, 2, 3)); // [1, 2, 3]
  
  console.log(addArguments(1, 2)); // 3
  
  // Create a function with a preset leading argument
  const leadingThirtySevenList = list.bind(null, 37);
  
  // Create a function with a preset first argument.
  const addThirtySeven = addArguments.bind(null, 37);
  
  console.log(leadingThirtySevenList()); // [37]
  console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
  console.log(addThirtySeven(5)); // 42
  console.log(addThirtySeven(5, 10)); // 42

  //7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

  function multiply (a,b)
  {
    return a*b
  }

  console.log( multiply(3,5))
  const double = multiply.bind(null,2);
  console.log( double(5))