// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => {
  /**
   * JavaScript has 6 main value types you should know about:
   * ========================================================
   */

  /**
   * 1. String
   * A set of characters, basically anything you can type
   */
  var str = "Albert";

  /**
   * 2. Number
   * Can be an integer (1) or a float (1.50)
   */
  var num = 10;

  /**
   * 3. Boolean
   * Can only have two possible values: true or false.
   */
  var bool = true;

  /**
   * 4. Array
   * A list of values. Values can be of any type, including array itself.
   */
  var arr = ["apple", "banana", "grapes"];

  /**
   * 5. Object
   * A data structure with properties and their values. Property values can be of
   * any type, including functions and other objects.
   */
  var dog = {
    name: "Lunna",
    age: 5,
    colors: ["white", "black"],
    collar: {
      color: "red"
    },
    bark: function () {
      console.log("Woof!");
    }
  };

  /**
   * 6. Function
   * Contains a set of instructions that can later be executed by calling the
   * function. They can return a value.
   */
  function multiplyByTwo(n) {
    return n * 2;
  }

  // Here we call a function that returns a value. We call the function by writing
  // its name and following it by ()
  var tenTimesTwo = multiplyByTwo(10);
  console.log(tenTimesTwo);

  // Here we call a function inside an object, also know as a "method"
  dog.bark();

});
