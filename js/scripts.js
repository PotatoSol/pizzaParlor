function Pizza(){
  this.toppings = [];
  this.size = -1;
  this.cost = -1;
}

Pizza.prototype.isReady = function(){
  if((this.size !== -1)){
    this.calculatePrice()
    appendPrice(this.cost);
    showElement(document.getElementById("outputArea"));
    showElement(document.getElementById("orderReceipt"));
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
  //do stuff
  let sizeMod = 1 + (this.size * .1); 
  let toppingsMod = this.toppings.length;
  this.toppings.forEach(function(ele){
    if(ele === "vPepperoni" || ele === "vSausage"){
      toppingsMod++;
    }
  });
  returnCost += toppingsMod;
  returnCost *= sizeMod;
  this.cost = returnCost;
  return returnCost;
}

Pizza.prototype.capturePizzaSize = function(){
  let inputSize = document.getElementById("size").value;
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
}

Pizza.prototype.captureToppings = function(){
  let checkedBoxes = [];
  for(var i = 0; (i < (document.getElementById("selectToppings").length - 1)); i++){
    if(document.getElementById("selectToppings")[i].checked){
      checkedBoxes.push(document.getElementById("selectToppings")[i].value);
    }
  }
  this.toppings = checkedBoxes;
}

//============
function showElement(elementToShow){
  elementToShow.setAttribute("class", "notHidden");
}

function appendPrice(pizzaPrice){
  console.log(pizzaPrice);
  document.getElementById("outputArea").innerText = ("Your total is: $" + pizzaPrice.toFixed(2));
}

function appendReceipt(topping){
  console.log(topping);
  let newTopping = document.createElement("li");
  newTopping.innerText(topping);
  newTopping.setAttribute("class", "notHidden");
  document.getElementById("orderReceipt").append(newTopping);
}

function clearReceipt(){
  while(document.getElementById("orderReceipt").getFirstChild()){
    document.getElementById("orderReceipt").removeFirstChild()
  }
}

//============

window.addEventListener("load", function(){
  let userPizza = new Pizza();
  document.getElementById("selectPizzaSize").addEventListener("submit", function(event){
    event.preventDefault();
    userPizza.capturePizzaSize();
    userPizza.isReady();
  });
  document.getElementById("selectToppings").addEventListener("submit", function(event){
    event.preventDefault();
    userPizza.captureToppings();
    userPizza.isReady();
  });
});