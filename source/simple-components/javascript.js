class Human {
  kind = "homo sapiens";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log("name ", name);
  }

  sayAge() {
    console.log("age ", age);
  }
}

const gendalf = new Human("Gendalf", 777);

gendalf.sayAge();
gendalf.sayName();

export const a = 1;
export const b = 5;

const c = a + b;
console.log(c);
