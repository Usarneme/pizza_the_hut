const SIZES = ["SMALL","MEDIUM","LARGE","FAMILY"]
const MEATS = ["coloClawFish","roastedPorg","deepFriedNunaLegs","paddyFrogSnack","banthaTartare","groatChop"]
const VEGGIES = ["meiloorunFruit","floatingNabooFruit","crispedInfernoWeed","lalarenBloom","volchoSprig","spetzna"]
const SAUCES = ["marinara","thalaSirenMilkSauce"]
// const DRINKS = ["thalaSirenMilk"]
// const SIDES = ["cantoBightCakes","portionBread"]

export function PizzaOrder() {
  this.pizzas = []
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza)
}

export function Pizza() {
  this.toppings = {
    meats: [],
    veggies: [],
    sauces: []
  }
  this.size = undefined
}

Pizza.prototype.calculateCost = function() {
  let cost = 10
  cost += this.toppings.meats.length * 4
  cost += this.toppings.veggies.length * 3
  cost += this.toppings.sauces.length * 2
  return cost
}

Pizza.prototype.addTopping = function(topping) {
  let toppingType
  if (MEATS.includes(topping)) toppingType = "meats"
  if (VEGGIES.includes(topping)) toppingType = "veggies"
  if (SAUCES.includes(topping)) toppingType = "sauces"
  if (toppingType) this.toppings[toppingType].push(topping)
}

Pizza.prototype.changeSize = function(size) {
  if (SIZES.includes(size)) return this.size = size
}
