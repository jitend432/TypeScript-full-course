/*

|                 | Rule                                                           |
| --------------- | -------------------------------------------------------------  |
| Class types     | Simple, Constructor, Method, Inheritance                       |
| Modifiers       | public, private, protected                                     |
| Constructor     | Only 1, auto call  =>    constructor(private name: string) {}  |
| Method          | Class के अंदर function                                          |
| Class naming    | PascalCase         =>    class StudentData {}                  |
| Function/method | camelCase          =>    getName()                             |
| extends         | "inherit karna"
| super()         | "parent ko call karna"
| override        | "parent ka method replace karna"

*/

class Animal {
    name : string;
    
    constructor(name:string) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name}`,"is barking")
    }
    speak() {
        console.log(`${this.name} is making a sound`)
    }

}
let dog = new Animal("Jerry")
console.log(dog.name)
dog.bark()


class Cat extends Animal {
        Meao() {
            console.log(`${this.name} is meowing`)
        }        
}
let cat = new Cat("Kitty");
cat.Meao();
cat.speak();

// If you want to add extra feature in child class extending parent class then you have to write constructor with super() keyword
// and also overriding parent method
class Cow extends Animal {
    age: number;

  constructor(name: string, age: number) {
    super(name.toUpperCase());  // 🔥 must call parent constructor // modify before sending like .toUpperCase its optional
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is bawing`) // Method overriding
  }

}
let cow = new Cow("ganga",15);
console.log(cow.name);
console.log("Cow age is",cow.age);
cow.speak();