/*
| Modifier  | Same Class | Child Class | Outside |
| --------- | ---------- | ----------- | ------- |
| public    | ✅          | ✅           | ✅       |
| private   | ✅          | ❌           | ❌       |
| protected | ✅          | ✅           | ❌       |

*/

// Public
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak() {
    console.log(`${this.name} is speaking`);
  }
}

const a = new Animal("Dog");
console.log(a.name);   // ✅ allowed // output =>Dog
a.speak();             // ✅ allowed  // output => Dog is speaking 


// private -------------------------------------
class Animall {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private speak() {
    console.log(this.name);
  }

  public get value() : string {
    return this.name 
  }
  
  public set value(v : string) {
    this.name = v;
  }  
}
const boy = new Animall("Billa");
 console.log(boy.value);

 boy.value = "Tom is private";   // ✅ allowed (uses setter)
console.log(boy.value); // Tom



// protected  -------------------------------------
class Animalll {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animalll {
  meow() {
    console.log(this.name + " saying something"); // ✅ allowed
  }
  showName() {
    console.log(this.name)
  }

}

const cat = new Cat("Kitty");
 cat.meow()
 cat.showName()