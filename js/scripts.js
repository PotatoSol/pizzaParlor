function Pizza(){
  this.toppings = [];
  this.size = -1;
  this.cost = -1;
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
  let returnCost;
  
  //do stuff

  this.cost = returnCost;
  return returnCost;
}