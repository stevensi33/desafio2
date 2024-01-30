const ProductManager = require('./ProductManager');
const productManager = new ProductManager('products.json');

async function manageProducts() {
    await productManager.init();
    await productManager.addProduct({ title: 'Producto 2', description: 'Descripción 2', price: 100, thumbnail: 'ruta2', code: 'code2', stock: 10 });
    console.log(await productManager.getProducts());

    //buscar el producto con ID 1
    const productId = 1;

    // obtener un producto específico por su ID
    const product = await productManager.getProductById(productId);
    if (product) {
        console.log(`Producto encontrado con ID ${productId}:`, product);
    } else {
        console.log(`Producto con ID ${productId} no encontrado.`);
    }

}

manageProducts();
