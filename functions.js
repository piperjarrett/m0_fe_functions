// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello there user!");
}
printGreeting();
printGreeting();
printGreeting();
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function acceptOne(first) {
  console.log(`The data was interpolated as ${first}.`);
}
acceptOne("Hello");
// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function tryThis(first, second, third) {
  var range = second - third;
  console.log(`The name of the company is ${first} and the pay range is ${range} dollars.`);
}
tryThis("Costco", 50, 15);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(first, second) {
var num = `${first}`
  if (num > 3) {
  console.log(`${second} is stocked.`);
}
  else if (num == 0) {
  console.log(`${second} - OUT of stock!`);
}
else if (num <= 3 && num > 0) {
  console.log(`${second} - running LOW`);
}
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
