/*
 CONDITIONAL OPERATORS =>

  1. if / else if / else
  2. Ternary Operator ? : =>  Nested ternary
  3. switch / case
  4. Nullish Coalescing ??
  5. Optional Chaining ?.
  6. Logical Operators && || !

*/

//  1. if / else if / else
let age:number = 75;
if(age<=18) {
    console.log("He is Minor")
}else if (age>75) {
    console.log("he is adult")
} else {
    console.log(age,"He is more than 30");
}

// 2. Ternary Operator ? :
let agee: number = 75;
let output: string = agee>=18 ? "Adult" : "Minor";
console.log(output);


// Nested ternary
let score: number = 75;
let grade: string = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log(grade); // "B"


// 3. switch / case
let day: string = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}

//4. Nullish Coalescing ??

// Returns right side only if left is null or undefined
let username: string | null = null;
let displayName: string = username ?? "Guest";
console.log(displayName); // "Guest"

let scoree: number | undefined = undefined;
let finalScore = scoree ?? 0;
console.log(finalScore); // 0

// 5. Optional Chaining ?.
type User = {
  name: string;
  address?: {
    city?: string;
  };
};

let userr: User = { name: "Alice" };
// No error even if address is undefined
console.log(userr?.address?.city); // undefined (no crash)


// 6. Logical Operators && || !
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn && isAdmin);  // false (both must be true)
console.log(isLoggedIn || isAdmin);  // true  (one must be true)
console.log(!isLoggedIn);            // false (negation)
// Practical use
let user = isLoggedIn && "Welcome, Alice!";
console.log(user); // "Welcome, Alice!"