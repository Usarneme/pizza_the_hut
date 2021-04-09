const SIZES = ["SMALL","MEDIUM","LARGE","FAMILY"]
const MEATS = ["coloClawFish","roastedPorg","deepFriedNunaLegs","paddyFrogSnack","banthaTartare","groatChop"]
const VEGGIES = ["meiloorunFruit","floatingNabooFruit","crispedInfernoWeed","lalarenBloom","volchoSprig","spetzna"]
const DRINKS = ["thalaSirenMilk"]
const SIDES = ["cantoBightCakes","portionBread"]
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

Pizza.prototype.addTopping = function(topping) {
  let toppingType
  if (MEATS.includes(topping)) toppingType = "meats"
  if (VEGGIES.includes(topping)) toppingType = "veggies"
  if (toppingType) this.toppings[toppingType].push(topping)
}

Pizza.prototype.changeSize = function(size) {
  if (SIZES.includes(size)) return this.size = size
}
