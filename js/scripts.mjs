import { PizzaOrder, Pizza } from "./PizzaOrder.js"

let size
const meats = [], veggies = [], sauces = []

$(document).ready(function() {
  console.log('Document Ready!')

  $(".size-button").click(function() {
    // if this button used to be active, the user has undone their size selection
    if ($(this).attr("aria-pressed") === "true") {
      $(".size-button").attr("disabled", false)
      size = undefined
      // console.log("size reset",size)
    } else {
      // when a size selection is made, disable all other size-buttons
      $(".size-button").attr("disabled", true)
      // re-enable the button for the size that was selected
      // allowing user to undo selection by clicking again
      // while limiting user to selecting only a single size
      $(this).attr("disabled", false)
      // set the size of the pizza
      // each button has a unique size class always the fourth class in the list of classes
      size = $(this).attr("class").split(" ")[3].toUpperCase()
      // console.log("size set",size)
    }
  })

  $(".meat").click(function() {
    if ($(this).attr("aria-pressed") === false || $(this).attr("aria-pressed") === "false") {
      meats.push(this.id)
    } else {
      const index = meats.indexOf(this.id)
      meats.splice(index,1) // remove the meat
    }
  })
})
