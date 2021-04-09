import { PizzaOrder, Pizza } from "./PizzaOrder.js"

console.log("loaded scripts.js")
console.log(Pizza)

$(document).ready(function() {
  console.log('Document Ready!')

  $(".btn").click(function() {
    console.log("Button pressed")
    const isPressed = $(this).attr("aria-pressed")
    $(this).attr("aria-pressed", !isPressed)
  })
})
