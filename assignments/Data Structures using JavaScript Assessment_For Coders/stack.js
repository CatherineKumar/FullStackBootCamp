//Problem Statement 1
class Stack {
  constructor() {
    // Initialize an empty array to store stack elements
    this.top = -1
    this.capacity = 0
    this.items = []
  }

  isEmpty() {
    // Check if the stack is empty
    if ( this.items.length == 0 )
    {
      return true
    }
    else
    {
      return false
    }
    
  }

  // Push element onto the stack
  push(element) {
    // Add the specified element to the end of the items array
    this.items.push(element)
    this.top += 1
  }

  // Pop element from the stack
  pop() {
    // Check if the stack is empty - If empty, return "Underflow"
    // Remove and return the last element of the items array
    if (this.isEmpty())
    {
      return "Underflow"
    }
    else
    {
      this.top -= 1
      return this.items.pop()
    }
  }

  // Peek the top element of the stack
  peek() {
    // Return the last element of the items array without removing it
    if (this.isEmpty())
    {
      return "Empty Stack"
    }
    else
    {
      return this.items[this.top]
    }
  }

  // Print the stack elements
  printStack() {
 
    // Iterate through each element in the items array
    // Return the resulting string with trailing spaces removed

    let result = ''
    for (let i = 0; i < this.items.length; i++)
    {
      result +=  this.items[i].toString().trim() 
    }
    return result
  }

}

// Create a new stack instance
const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Check if the stack is empty
console.log("Is stack empty:", stack.isEmpty());

// Print the stack elements
console.log("Stack elements:", stack.printStack());

// Pop an element from the stack
console.log("Popped element:", stack.pop());

// Peek the top element of the stack
console.log("Top element:", stack.peek());

//-----------------------------------------------------------------------------

//Problem Statement 2
function isBalanced(expression) {
    // Initialize an empty array to represent the stack
    const expStack = new Stack()
    let ch
    let closing
    let opening
    let isBalance = true;

    for (let i = 0; i < expression.length; i++) {
       //Iterate through each character in the expression
       // If it's an opening brace, push it onto the stack
       // If it's a closing brace, check if the stack is empty or if the top of the stack matches the corresponding opening brace
       // If the stack is empty or the top of the stack doesn't match, the expression is unbalanced
       ch = expression[i]
       if ( ch == '(' || ch == '{' || ch == '[')
       {
          expStack.push(ch)
       }
       else if (ch == ')' || ch == '}' || ch == ']')
       {
          closing = ch;
          if (expStack.isEmpty() == false)
          {
             opening = expStack.pop()
             if ( isMatchingPair(opening, closing) == false)
             {
                isBalance = false;
                break

             }
          }
          else
          {
              isBalance = false;
              break
          }
       }    
    }

    // If the stack is empty at the end, the expression is balanced
    if (isBalance == true)
    {
        if (expStack.isEmpty() == false)
        {
          isBalance = false
        }
    }
    return isBalance    
}

function isMatchingPair(opening, closing) {
  // Check if the opening and closing braces form a matching pair
    if (  ( opening == '{' && closing == '}' ) ||
          ( opening == '(' && closing == ')' ) ||
          ( opening == '[' && closing == ']' )
    )
    {
      return true
    }
    else
    {
       return false;
    }
}

// Example usage:
let balancedExpression = "{(a+b)-c}*[a-{b*c}]";
let unbalancedExpression = "{(a+b-c}*[a-{b*c}]";

console.log("Balanced Expression:", isBalanced(balancedExpression)); // Output: true
console.log("Balanced Expression:", isBalanced(unbalancedExpression)); // Output: false


