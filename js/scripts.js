function Pizza(){
  this.toppings = [];
  this.size = -1;
  this.cost = -1;
  this.number = -1;
  this.toppingsSubmitted = false;
  this.sizeSubmitted = false;
  this.numberSubmitted = false;
  this.numberString = "";
  this.s = "";
}

Pizza.prototype.isReady = function(){
  if(this.toppingsSubmitted && this.sizeSubmitted && this.numberSubmitted){
    this.calculatePrice()
    appendPrice(this.cost);
    showSize(this);
    showElement("outputArea");
    showElement("orderReceipt");
    showElement("receipt");
    showElement("pizzaSize");
  }
}

Pizza.prototype.addTopping = function(inputTopping) {
  this.toppings.push(inputTopping);
  appendReceipt(inputTopping);
};

Pizza.prototype.setSize = function (inputSize){ //small = 1, medium, 2, large = 3, xLarge = 4
  if(inputSize !== 1 || inputSize !== 2 || inputSize !== 3 || inputSize !== 4){
    return false;
  }
  this.size = inputSize;
  return true;
}

Pizza.prototype.calculatePrice = function(){
  let returnCost = 9; 
  let sizeMod = 1 + (this.size * .1); 
  let toppingsMod = this.toppings.length;
  this.toppings.forEach(function(ele){
    if(ele === "Pepperoni" || ele === "Italian Sausage"){
      toppingsMod++;
    }
  });
  returnCost += toppingsMod;
  returnCost *= sizeMod;
  returnCost *= this.number;
  this.cost = returnCost;
  return returnCost;
}

Pizza.prototype.capturePizzaSize = function(inputSize){
  //let inputSize = document.getElementById("size").value;
  switch(inputSize) {
    case "small":
      this.size = 1;
      break;
    case "medium":
      this.size = 2;
      break;
    case "large":
      this.size = 3;
      break;
    case "xLarge":
      this.size = 4;
      break;
  }
  this.sizeSubmitted = true;
  this.isReady();
}

Pizza.prototype.captureToppings = function(inputToppings){
  var checkedBoxes = [];
  clearReceipt();
  for(var i = 0; (i < getElement("selectToppings").length - 1); i++){
    if(getElement("selectToppings")[i].checked){
      checkedBoxes.push(getElement("selectToppings")[i].value);
      appendReceipt(getElement("selectToppings")[i].value);
    }
  }
  this.toppingsSubmitted = true;
  this.toppings = checkedBoxes;
}

Pizza.prototype.captureNumber = function(inputNumber){
  this.numberSubmitted = true;
  this.number = parseInt(inputNumber);
  switch(this.number){
    case 1:
      this.numberString = "A ";
      this.s = "";
      break;
    case 2:
      this.numberString = "Two ";
      this.s = "s";
      break;
    case 3:
      this.numberString = "Three ";
      this.s = "s";
      break;
    case 4:
      this.numberString = "Four ";
      this.s = "s";
      break;
  }
}

//============
function showElement(elementToShow){
  document.getElementById(elementToShow).setAttribute("class", "notHidden");
}

function getElement(elementToGet){
  return document.getElementById(elementToGet);
}

function appendPrice(pizzaPrice){
  document.getElementById("outputArea").innerText = ("Your total is: $" + pizzaPrice.toFixed(2));
}


function clearReceipt(){
  while(document.getElementById("orderReceipt").hasChildNodes()){
    document.getElementById("orderReceipt").removeChild(document.getElementById("orderReceipt").firstChild);
  }
}

function appendReceipt(topping){ //should be in ui
  let newTopping = document.createElement("li");
  newTopping.innerText = topping;
  newTopping.setAttribute("class", "notHidden");
  document.getElementById("orderReceipt").append(newTopping);
}

function appendReceipt2(pizza){
  let newTopping = document.createElement("li");
  
}

function showSize(inputPizza){ //shout be in ui
  let toppings = "pizza" + inputPizza.s;
  if(inputPizza.toppings.length > 0){
    toppings = "pizza" + inputPizza.s + " with:";
    console.log(inputPizza);
  }
  let size;
  if(inputPizza.size == 1){
    size = "small";
  } else if (inputPizza.size == 2){
    size = "medium";
  } else if (inputPizza.size == 3){
    size = "large"; 
  } else if (inputPizza.size == 4){
    size = "extra large";
  } else {
    size = "super omega large"; //this should never happen
  }
  
  document.getElementById("pizzaSize").innerText = inputPizza.numberString + size + " " + toppings;
}
//============

window.addEventListener("load", function(){
  let userPizza = new Pizza();
  document.getElementById("selectPizzaSize").addEventListener("submit", function(event){
    event.preventDefault();
    userPizza.capturePizzaSize(document.getElementById("size").value);
    userPizza.isReady();
  });
  document.getElementById("selectToppings").addEventListener("submit", function(event){
    event.preventDefault();
    userPizza.captureToppings(document.getElementById("selectToppings"));
    userPizza.isReady();
  });
  document.getElementById("selectNumber").addEventListener("submit", function(event){
    event.preventDefault();
    userPizza.captureNumber(document.getElementById("number").value);
    userPizza.isReady();
  });
});