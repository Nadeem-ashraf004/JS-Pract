//funtion :-
 //       function in javascript are duilding block of the langauge .They are block of code designed to perform 
      //particular task and they can define in various way .Blow are different types of functions
 //1.Function decleration:
    // A function declaration defines a named function. These functions are hoisted to the top of their scope, which 
       // means they can be called before they are defined in the code. 
       function firstName(name){
        return "Nadeem  " + name;
       }  
       console.log(firstName("Ashraf")) 
  //2.Function Expression
  //A function expression defines a function inside an expression. These functions are not hoisted, so they cannot be 
  //called before they are defined.
  const Myage=function(age){
    return "My age is :"+ age
  }
console.log(Myage(23))
//3. Immediately Invoked Function Expression (IIFE):
//An IIFE is a function that is defined and executed immediately after its creation. It is commonly used to 
//avoid polluting the global namespace.
(function () {
    console.log("FOO!");
})();
//with name 
(function foo() {
    console.log("FOO!");
})();
//with parameter
(function (message) {
    console.log(message);
})("FOO!");
  //5. Arrow Function
  //Arrow functions are a shorter syntax for writing function expressions. They also do not have their own this 
  //context, which makes them useful in certain situations
  const greet = (name) => {
    return 'Hello, ' + name;
};

console.log(greet('Nadeem'));
//For single-line functions, you can omit the braces and the return keyword:
const greet1 = name => 'Hello, ' + name;

console.log(greet('Ashraf'));