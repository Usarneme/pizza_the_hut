const SIZES = ["SMALL","MEDIUM","LARGE","FAMILY"]

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
  if (SIZES.includes(size)) return this.size = size
}
