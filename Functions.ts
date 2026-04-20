/*
All typescript functions

1 - Function Declaration  -->  Regular function
2 - function expression
3 - Arrow function
4 - Optional parameters
5 - Default Parameter
6 - Rest Parameters
7 - Function with Return Type
8 - Void Function
9 - Function Type (Type Alias / Interface)
10 - Callback Function
11 - Generic Function

*/

// Regular function
function add (a:number, b:number):number {
    return a+b;
}
console.log("Add result =>",add(5,7))


// function expression
const result = function (c:number, d:number) :number {
    return c*d
}
console.log("Multiply result =>",result(6,7))


// Arrow function
const mul = (f:number,g:number):number => {
      return f*g;
}
console.log(mul(3,5))


// Optional parameters
function greet(name: string, game?: string): string {
     return game ? `Hi my name is ${name} and I play ${game}` : `Great ${name}`

}
console.log(greet("Rinku", "Ludo"))
console.log(greet("Rinku"))


// Default Parameter
function he (x:number, y:number = 5) : number {
    return x*y;
}
console.log(he(4))

//Rest Parameters
function sum(...num: number[]): number {
  return num.reduce((a, b) => a + b);
}
console.log(sum(4,7,8,5,9,6,2,1,4,7))

// Function with Return Type
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(87,9));

// Void Function
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage("How are you")


// Function Type (Type Alias / Interface)
type operation = (v:number, m:number) => number;
const addd:operation =(v,m)=> {
   return v*m;
}
console.log("addd",addd(5,8))

// Callback Function
function process(num: number, callback: (x: number) => number) {
  return callback(num);
}
console.log(process(10, (x) => x + 5));

// Generic Function
function good<T> (n:T):T {
    return n;
}
console.log(good<string>("Jitendra"))
console.log(good<number>(25436879))