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

  test("pizza object contains a toppings property which is an object", () => {
    const myPizza = new Pizza()
    expect(typeof myPizza.toppings).toEqual("object")
  })

  test("pizza object contains a size property", () => {
    const myPizza = new Pizza()
    expect(myPizza).toHaveProperty("size")
  })

})
