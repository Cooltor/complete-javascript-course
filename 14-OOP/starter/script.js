'use strict';

// const Person = function (firstName, birthYear, password) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.password = password;

//   // Never do this !!! not create a method inside a constructor function because it will create a new copy of the method for each object created
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const romain = new Person('Romain', 1986, 'fpozihfihfipeh');
// const jack = new Person('Jack', 1975, 'izhfrizh!"érfi');
// console.log(romain, jack);

// console.log(jonas instanceof Person);

// // Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// romain.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(romain));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, romain);

// console.log(jonas.hasOwnProperty('species'));
// console.log(jonas.hasOwnProperty('FirstName'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// // Class expression

// const PersonCL = class{}

//class declaration

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Hey ${this.firstName}`);
//   };
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizes
// // 3. Classes are executed in strict mode
// const personProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sarah = Object.create(personProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`Je m'appelle ${this.firstName} et j'étudie ${this.course}`);
// };

// const Mike = new Student('Mike', 2020, "l'informatique");
// Mike.introduce();
// Mike.calcAge();

// console.log(Mike.__proto__);
// console.log(Mike.__proto__.__proto__);

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     // Always needs to happen first!
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`Je m'appelle ${this.firstName} et j'étudie ${this.course}`);
//   }
// }

// const Mike = new Student('Mike', 2020, "l'informatique");
// Mike.introduce();
// Mike.calcAge();

// const martha = new Student('Martha', 2012, 'les arts');
// martha.introduce();
// martha.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Protected property with _ in front of the name It's just a convention
    this._movements = [];
    this.locale = navigator.language;
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);

// Chaining methods

acc1.deposit(355).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
