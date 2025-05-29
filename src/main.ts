import { DigitalProducts } from "./models/DigitalProducts";
import { Product } from "./models/Product";

const sampleProduct = new Product(9983,"Potato",10,100)

// console.log(sampleProduct.getProductDetails())
// console.log(sampleProduct.getProductStockValue())

const ebookProduct = new DigitalProducts(1122,"Story Stream",250,20,5)
console.log(ebookProduct.getDownloadEbook())