/*
🔷 1. Primitive Types

Type               Description                     Example 

number             All numeric values               let age: number = 25
string             Text values                      let name: string = "Alice"
boolean            True or false                    let isActive: boolean = true
null               Intentional absence of value     let val: null = null 
undefined          Uninitialized variable           let x: undefined = undefined
bigint             Large integers                   let big: bigint = 100n
symbol             Unique identifiers               let sym: symbol = Symbol("id")

🔷 2. Special Types    ------>    Ye thode powerful / advanced behavior wale types hote hain:

any         → kuch bhi assign kar sakte ho (avoid in interview 😄)
unknown     → safer version of any
void        → function kuch return nahi karta
never       → function kabhi return nahi karega (error ya infinite loop)

🔷 3. Object Types

object     → general object
Array      → list of values
Tuple      → fixed length + fixed types array
enum       → named constants
function   → function type
Class
Interface  

🔷 4. Advanced Types    ------>    TypeScript ki real power yahan hai 💪

👉 Union Type            let value: string | number;
👉 Intersection Type     type A = { name: string };    type B = { age: number };   type C = A & B;
👉 Literal Types         let status: "success" | "error";
👉 Type Alias            type User = { name: string; age: number };

🔷 5. Utility Types (Built-in Helpers) ---->  TypeScript me already bane hue helpers:

👉 Real project ka backbone

API banate time
React props me
Data filter karte time

Partial<T>      → optional
Required<T>     → mandatory
Readonly<T>     → select fields
Pick<T>         → remove fields
Omit<T>         → no change
Record<K, T>    → dynamic object


🔷 6. Generics   ----->   Reusable types banane ke liye:

    function getFirst<T>(arr: T[]): T {
      return arr[0];
    }

🔷 7. Type Assertions   --->   Type ko manually batana:

let value: any = "hello";
let length = (value as string).length;

🔷 8. Type Inference    ----->    TypeScript khud type guess kar leta hai:

let name = "Jitu"; // automatically string

*/

//any → direct use allowed
function addition (a:any, b:any) :any {
    return a+b;
}
console.log(addition(5,7))  

// unknown → pehle check karo, fir use karo
let animal : unknown = "Jerry";
if(typeof animal === "string") {
    console.log(animal.toUpperCase());
}

// void (kuch return nahi hota)
(function max():void {
    console.log("Jitu bhaiya");
})()

// never return
function fail(msg: string): never {
  throw new Error(msg);
}

function check(value: string | number) {
  if (typeof value === "string") {
    console.log("String hai");
  } else if (typeof value === "number") {
    console.log("Number hai");
  } else {
    fail("Unknown type");
  }
}
// 👇 force wrong input
check(true as any);


// Utility Types 
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// create
function createUser(user: User) {
  console.log("User created:", user);
}

// update
function updateUser(id: number, data: Partial<User>) {
  console.log("Updating user:", id, data);
}

// safe response
type SafeUser = Omit<User, "password">;

function getUser(): SafeUser {
  return {
    id: 1,
    name: "Jitu",
    email: "jitu@gmail.com",
  };
}

// preview
type PreviewUser = Pick<User, "name" | "email">;

function getUserPreview(): PreviewUser {
  return {
    name: "Jitu",
    email: "jitu@gmail.com",
  };
}
