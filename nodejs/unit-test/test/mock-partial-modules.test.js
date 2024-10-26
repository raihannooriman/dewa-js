import { getAllProducts, getProductById } from "../src/database"
import { ProductService } from "../src/product-service"

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js")
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn()
  }
})

test.failing("mock modules getProductById", () => {
  ProductService.findById(1)
})

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Mock Product 1",
    },
    {
      id: 2,
      name: "Mock Product 2",
    }
  ]
  getAllProducts.mockImplementation(() => {
    return products
  })
  expect(ProductService.findAll()).toEqual(products)
})