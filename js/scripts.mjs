import { PizzaOrder, Pizza } from "./PizzaOrder.js"

let size

$(document).ready(function() {
  console.log('Document Ready!')

  $(".btn").click(function() {
    console.log("Button pressed", $(this).attr("aria-pressed"))
    // console.log($(this))
    // if this button used to be active, the user has undone their size selection
    if ($(this).attr("aria-pressed") === "true") {
      $(".size-button").attr("disabled", false)
      size = undefined
      console.log("size reset",size)
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
      console.log("size set",size)
    }
  })
})
