// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//(5 question of true)

let number: number = 10;
// Test 1
console.log("Is number equal to 10? I predict True.");
console.log(number === 10);

// Test 2
console.log("Is number not equal to 5? I predict True.");
console.log(number !== 5);

// Test 3
console.log("Is number greater than 5? I predict True.");
console.log(number > 5);

// Test 4
console.log("Is number less than or equal to 10? I predict True.");
console.log(number <= 10);

// Test 5
console.log("Is number multiplied by 2 equal to 20? I predict True.");
console.log(number * 2 === 20);

//(5 questions false)
let car: string = 'subaru';
// Test 1
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car === 'honda');

// Test 2
console.log("Is car not equal to 'hilux'? I predict True.");
console.log(car === 'hilux');

// Test 3
console.log("Is car length less than 5? I predict False.");
console.log(car.length < 5);

// Test 4
console.log("Is car length greater than 7? I predict False.");
console.log(car.length > 7);

// Test 5
console.log("Is car equal to 'Subaru'? I predict False (case-sensitive comparison).");
console.log(car === 'Subaru');