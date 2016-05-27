# Triangle

In order to do this assignment I used these language, technologies and libraries:

* Javascript/ES6/ES2015
* npm as a package manager and builder
* Babel as a transpiler (since I write my code in es6), and I used systemjs as module type
* Node as a javascript environment
* Mocha and Chai for Unit test
* VSCode as editor

##Strategy:
I have two implementations for this scenario, one of is function oriented and the other one is class oriented.

My main approach was TDD. So first I wrote my tests!

### Class Oriented

I’ve created a class called Triangle (triangle.class module). This module exports Triangle class which consists: setSides and getType methods, and sides property.
This module also has 3 private functions called: isVlid, sidesValidator and isTriangle. they are taking care of validations!

### Function Oriented

This approach also has those private functions -isVlid, sidesValidator, isTriangle- and exports getType function. this function accepts 3 arguments as triangle’s sides.
By this approach I need to call IsValid function each time that getType function is called! because validation should be run before that!

## Class vs Function

It seems Class is fit for this scenario, because my object -Triangle- has couple of behaviours -getType, isValid-, but on the other hand by the new style of JS programming -(import/export)/module based- everything is like a class and we don’t need to have such a thing. For example right now I’ve created a class with only  getType function but not any other functions! On the other hand, class based approach’s flow is bit easier than the other one, for example I don’t need to call isValid at the beginning of the getType function, in the constructor or setSides, isValid was already called and everything is okay to return the triangle type.
Long story short, both approaches are good enough for this scenario.

Note: both approaches support sending arguments as separate numbers like ```(1, 2, 3)```, or  as a single array like ```([1, 2, 2])``` -overloading-.

## Usage
  * If you have problem with babel please follow these steps:
    * `npm uninstall --global babel-cli`
    * `npm install --save-dev babel-cli`
  * `npm install`
  * scripts
    *  Start
      ```npm start 1,2,2``` send arguments as comma seperated string
    *  Test 
     ```npm test```
