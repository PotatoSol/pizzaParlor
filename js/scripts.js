function Pizza(){
  this.toppings = [];
  this.size = -1;
  this.cost = -1;
}

Pizza.prototype.isReady = function(){
  if((this.size !== -1)&& (this.toppings.length > 0)){
    this.calculatePrice()
  };
}

Pizza.prototype.addTopping = function(inputTopping) {
  this.toppings.push(inputTopping);
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