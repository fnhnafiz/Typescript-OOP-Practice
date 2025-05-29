import { Product } from "./models/Product";

const sampleProduct = new Product(9983,"Potato",10,100)

console.log(sampleProduct.getProductDetails())
console.log(sampleProduct.getProductStockValue())