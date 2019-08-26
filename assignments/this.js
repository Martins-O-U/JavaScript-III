/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
Ans:
*    The Key word 'this' in javaScript refers to the object which it is expressed in, the object which is exucuting a javaScript code. it has for binding as follows
*
* 1. The window binding/global : this is a condition where the key word 'this' refers to the obeject (variable) located in the general window of a browser is a toplevel variable/function.
* 2. Implicit Binding: this is a case where a function is called by an object with a preceding dot, the object before that dot is also a 'this'.
* 3. New binding: In this case the key word 'this' is used to create a new instance of the object it was expressed in with this use of 'new', here is where a constructure is used.
* 4. Explicit Binding: this is a case where call,apply or bind is used to invoke a function, with it what an object is set to can be overriden.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function object(param) {
    console.log(this);
    return param;
};
object();

// Principle 2
// code example for Implicit Binding
const person = {
    greets: 'Hello',
    introduce: function(name) {
      return `${this.greets} my name is ${name}`;
    }
  };
  console.log(person.introduce('Martins'));

// Principle 3
// code example for New Binding
function People (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  let Human  = new People ('George', 'Male', 30);
  console.log(Human);

// Principle 4
// code example for Explicit Binding
function robo(name, age) {
    return `Hello ${name} you seem to be ${age}years old`;
  }
  console.log(robo.call(null, 'Stan', 28));