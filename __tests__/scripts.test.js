import { Pizza, PizzaOrder } from "../js/PizzaOrder.js"

describe("🍕 Pizza The Hut", () => {
  test("sanity check", () => {
    expect(true).toEqual(true)
  })

  test("it has a pizza object", () => {
    const myPizza = new Pizza()
    expect(myPizza).toBeDefined()
  })

  test("pizza object contains a toppings property", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("toppings")
  })

  test("pizza contains a toppings property which is an object", () => {
    const myPizza = new Pizza()
    expect(typeof myPizza.toppings).toEqual("object")
  })

  test("pizza object contains a size property", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("size")
  })

  test("pizza.toppings object contains a 'meats' property", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings).toHaveProperty("meats")
  })

  test("pizza.toppings.meats is an array", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings.meats).toEqual([])
  })

  test("pizza.toppings object contains a 'veggies' property", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings).toHaveProperty("veggies")
  })

  test("pizza.toppings.veggies is an array", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings.veggies).toEqual([])
  })

  test("pizza.toppings object contains a 'sauces' property", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings).toHaveProperty("sauces")
  })

  test("pizza.toppings.sauces is an array", () => {
    const myPizza = new Pizza()
    expect(myPizza.toppings.sauces).toEqual([])
  })

  test("pizza has a prototype method calculateCost", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("calculateCost")
  })

  test("pizza has a prototype method addTopping", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("addTopping")
  })

  test("pizza has a prototype method changeSize", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("changeSize")
  })

  test("changeSize method sets pizza.size property", () => {
    const myPizza = new Pizza()
    myPizza.changeSize("SMALL")
    expect(myPizza.size).toEqual("SMALL")
  })

  test("changeSize() only accepts 'SMALL', 'MEDIUM', 'LARGE', and 'FAMILY' size params", () => {
    const myPizza = new Pizza()
    myPizza.changeSize("blah")
    expect(myPizza.size).toEqual(undefined)
  })

  test("changeSize('FAMILY') method sets pizza.size to LARGE", () => {
    const myPizza = new Pizza()
    myPizza.changeSize("FAMILY")
    expect(myPizza.size).toEqual("FAMILY")
  })

  test("adding a meat topping includes it in the pizza.toppings.meats array", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("roastedPorg")
    expect(myPizza.toppings.meats).toContain("roastedPorg")
  })

  test("adding a veggie topping includes it in the pizza.toppings.veggies array", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("crispedInfernoWeed")
    expect(myPizza.toppings.veggies).toContain("crispedInfernoWeed")
  })

  test("adding a sauce topping includes it in the pizza.toppings.sauces array", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("thalaSirenMilkSauce")
    expect(myPizza.toppings.sauces).toContain("thalaSirenMilkSauce")
  })

  test("calculateCost function returns a number/int", () => {
    const myPizza = new Pizza()
    const cost = myPizza.calculateCost()
    expect(typeof cost).toBe("number")
  })

  test("cost increases when you add a meat", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("roastedPorg")
    const cost = myPizza.calculateCost()
    expect(cost).toBeGreaterThan(10)
  })

  test("cost increases when you add a veggie", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("crispedInfernoWeed")
    const cost = myPizza.calculateCost()
    expect(cost).toBeGreaterThan(10)
  })

  test("cost increases when you add a sauce", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("thalaSirenMilkSauce")
    const cost = myPizza.calculateCost()
    expect(cost).toBeGreaterThan(10)
  })

  test("adding a bunch of toppings increases the cost", () => {
    const myPizza = new Pizza()
    myPizza.addTopping("thalaSirenMilkSauce")
    myPizza.addTopping("roastedPorg")
    myPizza.addTopping("crispedInfernoWeed")
    const cost = myPizza.calculateCost()
    expect(cost).toBeGreaterThan(10)
  })

  test("you should be able to order more than one pizza (via PizzaOrder)", () => {
    const myPizzaOrder = new PizzaOrder()
    expect(myPizzaOrder).toBeInstanceOf(PizzaOrder)
  })

  test("you should be able to add a pizza to your pizza order", () => {
    const myPizzaOrder = new PizzaOrder()
    const myPizza = new Pizza()
    myPizzaOrder.addPizza(myPizza)
    expect(Array.isArray(myPizzaOrder.pizzas)).toBeTruthy()
  })

})
