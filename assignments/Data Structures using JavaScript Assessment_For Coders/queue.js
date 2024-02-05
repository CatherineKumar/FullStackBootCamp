//Problem Statement 3
class PrinterQueue {
  constructor() {
      // Initialize an empty array to store documents in the queue
      this.items = []
  }

  isEmpty() {
      // Check if the printer queue is empty
      if ( this.items.length == 0 )
      {
        return true
      }
      else
      {
        return false
      }     
  }

  // Add a new document to the printer queue
  enqueue(document) {
    // Push the specified document onto the end of the queue
    // Log a message indicating that the document has been added to the printer queue
    this.items.push(document)
    console.log('Document added to printer queue: ', document)
  }

  // Remove and return the first document from the printer queue
  dequeue() {
    // Check if the queue is empty - Log a message indicating that the printer queue is empty
    // Remove and return the first document from the queue
    if ( this.isEmpty() )
    {
      console.log('Printer queue is empty.')
    }
    else
    {
      return this.items.shift()
    }
  }

  // Retrieve the first document in the printer queue without removing it
  peek() {
    // Check if the queue is empty - Log a message indicating that the printer queue is empty
    // Return a message indicating the next document to print
    if ( this.isEmpty() )
    {
      console.log('Printer queue is empty.')
    }
    else
    {
      return this.items[0]
    }
  }

  // Display all documents in the printer queue
  displayQueue() {
    // Log each document in the queue on a new line
    this.items.forEach((document) => console.log(document))
  }
}

// Create a new printer queue instance
const myPrinterQueue = new PrinterQueue();

// Add documents to the printer queue
myPrinterQueue.enqueue("Document-1");
myPrinterQueue.enqueue("Document-2");
myPrinterQueue.enqueue("Document-3");

// Display the next document to print
console.log(myPrinterQueue.peek());

// Print the first document from the queue
console.log("Printing document:", myPrinterQueue.dequeue());

// Display the updated printer queue
myPrinterQueue.displayQueue();

//--------------------------------------------------------------------------------

//Problem Statement 4
function countStudentsUnableToEat(students, sandwiches) {
  // Create a queue using the spread operator to copy the students array

  // Iterate through each sandwich
  for (const sandwich of sandwiches) {

    // Check if there are no students left in the queue
    // Break the loop if no students are left

    // Get the front student from the queue

    // Check if the front student prefers the current sandwich
    // If the student takes the sandwich, continue to the next sandwich
    // If the student doesn't prefer this sandwich, put the student back to the end of the queue
  }

  // Return the count of remaining students in the queue who are unable to eat
}

// Example usage:
const students = [1, 0, 1, 0];
const sandwiches = [0, 1, 0, 1];
const result = countStudentsUnableToEat(students, sandwiches);
console.log("Students unable to eat:", result);
