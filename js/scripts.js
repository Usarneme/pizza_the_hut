export default function Pizza() {
  this.toppings = {
    meats: [],
    veggies: [],
    sauces: []
  }
  this.size = undefined
}

Pizza.prototype.calculateCost = function() {
  // todo
}

Pizza.prototype.addTopping = function() {
  // todo
}

Pizza.prototype.changeSize = function(size) {
  this.size = size
}
