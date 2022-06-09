// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askQuestion() {  //the function name doesnt start with a ver, so we have to change that
  console.log("Hello, what is your name?")
}

askQuestion()


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
console.log(sum);
} //{ bracket was in the wrong place had to move it back

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
function makeFreshPesto() { // Had to add space in between () and {, had to rename func as function because func is undefined
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
} // Had to move { down a line, because it was originally in the wrong place

makeFreshPesto();

//  EX 4:
function findAverage(num1, num2) {// Had to move { up a line because it was in the wrong place
  // had to change average to findAverage because the function was named wrong
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`) // period was outside ` quotes so had to move it inside in order to run.
} // { bracket was in the wrong place
  findAverage(4, 5); // had to call function so it would run. 
