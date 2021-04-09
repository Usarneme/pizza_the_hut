import { PizzaOrder, Pizza } from "./PizzaOrder.js"

let size
const meats = [], veggies = [], sauces = []

function placeOrder() {
  // call Pizza here... TODO
}

function decamelize(camelCaseString){
	return camelCaseString
        .replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
        .toLowerCase();
}

function updateOrderStatus() {
  console.log("updating order status...",size,meats,veggies,sauces)
  let html = `<div><h4>Current Pizza:<h4><div class="row">`
  if (size) html += `<div class="col border m-2 p-3">One ${size.toLowerCase()} pizza.</div>`
  if (meats.length > 0) {
    html += `<div class="col border m-2 p-3"><h4>Meats:</h4>`
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
    html += `<div class="col border m-2 p-3"><h4>Veggies:</h4>`
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
    html += `<div class="col border m-2 p-3"><h4>Sauce:</h4>`
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
  $(".order-status").html(html).show()
}

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

  $(".btn").click(function() {
    if (this.id === "add-pizza-button") return
    updateOrderStatus()
  })

})
