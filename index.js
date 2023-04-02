class ProductManager {
    constructor() {
        this.products = []
        this.indice = 1
    }
    addProduct(product) {
        this.products.push(product)
        product.id = this.products.length + 1
    }
    getProducts() {
        console.log(this.products)
    }
    getProductById(id){
        const productByid = this.products.find((e) => e.id === id)

        productByid !== undefined
        ?console.log(productByid.title)
        :console.log("Enter a product")
    }
        }

class Product {
    constructor(
        title, description, price, thumbnail, code, stock
    ) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
            }
   }

const product1 = new Product("Placard", "Color marron 2 puertas", "$35000", "placard1.jpg", "123", "28")
const product2 = new Product("Mesa", "Color blanco", "$42300", "mesa.jpg", "234", "22")
const product3 = new Product("Escritorio", "Escritorio amplio para pc", "$23400", "escritorio.jpg", "345", "17")
const product4 = new Product("Racktv", "Color banco y madera", "$32150", "racktv.jpg", "456", "25")
const product5 = new Product("Zapatero", "Color banco 3 estantes", "$21500", "zapatero.jpg", "567", "12")

const productManaget = new ProductManager()

productManaget.getProducts()

productManaget.addProduct(product1)
productManaget.addProduct(product2)
productManaget.addProduct(product3)
productManaget.addProduct(product4)
productManaget.addProduct(product5)

productManaget.getProducts()

productManaget.getProductById(2)
productManaget.getProductById(3)
productManaget.getProductById(4)
productManaget.getProductById(5)
productManaget.getProductById(6)


