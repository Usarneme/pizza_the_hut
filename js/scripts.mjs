import { PizzaOrder, Pizza } from "./PizzaOrder.js"

// Helper Funcs
function decamelize(camelCaseString){
	return camelCaseString
        .replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
        .toLowerCase();
}

let size, meats = [], veggies = [], sauces = []
let myPizzaOrder = new PizzaOrder()

function createPizza() {
  if (!size) return undefined
  const myPizza = new Pizza()
  if (meats.length > 0) meats.forEach(topping => {
    myPizza.addTopping(topping)
  })
  if (veggies.length > 0) veggies.forEach(topping => {
    myPizza.addTopping(topping)
  })
  if (sauces.length > 0) sauces.forEach(topping => {
    myPizza.addTopping(topping)
  })
  myPizza.changeSize(size)
  return myPizza
}

function addToOrder(myPizza) {
  myPizzaOrder.addPizza(myPizza)
  myPizzaOrder.addCost(myPizza.calculateCost())
}

function updateCurrentPizza() {
  let html = `<div><div class="row">`
  if (size) html += `<div class="col"><h4>Pizza Size:</h4>${size.toLowerCase()}.</div>`
  if (meats.length > 0) {
    html += `<div class="col"><h4>Meats:</h4>`
    meats.forEach((meat, index) => {
      html += ` ${decamelize(meat)}`
      if (index < meats.length - 1) {
        html += ", "
      } else {
        html += "."
      }
    })
    html += "</div>"
  }
  if (veggies.length > 0) {
    html += `<div class="col"><h4>Veggies:</h4>`
    veggies.forEach((veggie, index) => {
      html += ` ${decamelize(veggie)}`
      if (index < veggies.length - 1) {
        html += ", "
      } else {
        html += "."
      }
    })
    html += "</div>"
  }

  if (sauces.length > 0) {
    html += `<div class="col"><h4>Sauce:</h4>`
    sauces.forEach((sauce, index) => {
      html += ` ${decamelize(sauce)}`
      if (index < sauces.length - 1) {
        html += ", "
      } else {
        html += "."
      }
    })
    html += "</div>"
  }

  html += "</div></div>"
  $(".current-pizza").html(html)
  $(".order-status").show()
}

function updateOrder() {
  let html = `<div><h4>Current Order:<h4><div class="">`
  myPizzaOrder.pizzas.forEach((pizza, pizzaIndex) => {
    html += `<div>${pizzaIndex + 1}. ${pizza.size.toLowerCase()} - `
    Object.keys(pizza.toppings).forEach(toppingType => {
      if (pizza.toppings[toppingType].length > 0) {
        pizza.toppings[toppingType].forEach(topping => html += decamelize(topping) + " ")
      }
    })
    html += "</div>"
  })
  html += `<div>Order Total: $${myPizzaOrder.totalPrice}</div>`
  $(".order-total").html(html).show()
  console.log("update order called...")
}

function resetUi() {
  size = undefined
  meats = []
  veggies = []
  sauces = []
  $(".btn").attr("aria-pressed", false)
  $(".btn").attr("disabled", false)
  $(".btn").removeClass("active")
  $(".current-pizza").html("")
  $(".warning").hide()
}

$(document).ready(function() {
  $(".size-button").click(function() {
    if ($(this).attr("aria-pressed") === "true") {
      $(".size-button").attr("disabled", false)
      size = undefined
    } else {
      $(".size-button").attr("disabled", true)
      $(this).attr("disabled", false)
      size = $(this).attr("class").split(" ")[3].toUpperCase()
      $(".warning").hide()
    }
  })

  $(".meat").click(function() {
    if ($(this).attr("aria-pressed") === false || $(this).attr("aria-pressed") === "false") {
      meats.push(this.id)
    } else {
      const index = meats.indexOf(this.id)
      meats.splice(index,1)
    }
  })

  $(".veggie").click(function() {
    if ($(this).attr("aria-pressed") === false || $(this).attr("aria-pressed") === "false") {
      veggies.push(this.id)
    } else {
      const index = veggies.indexOf(this.id)
      veggies.splice(index,1)
    }
  })

  $(".sauce").click(function() {
    if ($(this).attr("aria-pressed") === false || $(this).attr("aria-pressed") === "false") {
      sauces.push(this.id)
    } else {
      const index = sauces.indexOf(this.id)
      sauces.splice(index,1)
    }
  })

  $("#close-warning").click(function() {
    $(".warning").hide()
  })

  $(".btn").click(function() {
    if (this.id === "add-pizza-button") {
      const newPizza = createPizza()
      if (newPizza === undefined) return $(".warning").show() // they forgot to select a size
      addToOrder(newPizza)
      console.log("after updating order to",myPizzaOrder)
      updateOrder() // update UI to show the pizza has been added to the order
      return resetUi() // reset myPizza to blank state and refresh UI
    }
    updateCurrentPizza()
  })

})
