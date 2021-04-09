import Pizza from "../js/scripts"

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

})
