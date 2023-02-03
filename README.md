# _Pizza Parlor_

#### By _**Michael Sol**_

#### _A barebones website to calculate a pizza price_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _GIT_

## Description

_This website takes in user input and calculates the price of a pizza based on those inputs.  It can be run multiple times to recalculate the price of a pizza.  It also returns the order to confirm that your selection is correct._

## Setup/Installation Requirements

* _Clone the repository to your machines_
* _Navigate to the directory_
* _Open index.html in your local browser_

## Known Bugs

* _No known bugs_

## License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

If you encounter any bugs, contact Michael.

Copyright (c) _1/27/2023_ _Michael Sol_

## Describe Pizza Functions

It will: "Create a Pizza object"
Code: new Pizza();
Expected output: Pizza{toppings: []; size: -1; cost: -1}

It will: "Create an addTopping method"
Code: newPizza.addTopping("pepperoni");
Expected output: newPizza = {toppings: ["pepperoni"]; size: -1; cost: -1}

It will: "Create a setSize method with small = 1, medium = 2; large = 3, xLarge = 4; method returns false if invalid size is entered"
Code: newPizza.setSize("small");
Expected output: true; newPizza = {toppings: ["pepperoni"]; size: "small", cost: -1}

It will: "Create a calculatePrice function"
Code: newPizza.calculatePrice();
Expected output: newPizza.calculatePrice() = 11

It will: "Capture size"
Code:  newPizza.captureSize();
Expected output: 2;

It will: "Capture toppings"
Code:  newPizza.captureToppings();
Expected output: [vOnions, vPepper]

It will: "Capture number of pizzas"
Code:  newPizza.captureNumber();
Expected output: pizza.number = 1;, pizza.numberString = "A ", pizza.s = "";

It will: "Check if toppings, number, and size are greater than -1, and then calculate price"
Code: Add toppings and choose size and choose number
Expected output: calculatePrice called 