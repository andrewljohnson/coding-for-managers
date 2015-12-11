---
layout: chapter
title: Make Objects in JavaScript
category: 3. Code Many Projects
order: 2
---

# Object Oriented Programming

Let's next learn how to make things in JavaScript. This chapter describes something many people called "object oriented programming" - so you can Google that term to read various info about it.

# Make a Car

If you wanted to describe a Car in JavaScript, you might start like this.

    // make a function called Car
    function Car() {
    }

Then, you might add a function to the Car to start its engine. To do this, you would add to its "prototype:"

    // when the engine starts, make some noise
    Car.prototype.startEngine = function() {
      alert("vroom!");
    }

Then, if you wanted to use this code you just wrote, and create a car, and start its engine, you'd code this:

    // make a Car and start its engine
    var car = new Car();
    car.startEngine();

 [You can run this code here](https://jsfiddle.net/daw0L0g8/), and you will see it alert the phrase vroom!

 In the next chapter, we do the same thing, but now it will be useful, because you will make an actual TicTacToe game that works.
