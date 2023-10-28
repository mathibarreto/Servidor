class ProductManager {
    constructor() {
      this.products = []; 
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getAllProducts() {
      return this.products;
    }
  
    
    getProductById(id) {
      return this.products.find(product => product.id === id);
    }
  
    
    updateProduct(id, updatedProduct) {
      const index = this.products.findIndex(product => product.id === id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
        return true; 
      }
      return false; 
    }
  
    
    deleteProduct(id) {
      const index = this.products.findIndex(product => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
        return true; 
      }
      return false; 
    }
  }
  


class ProductManager {
    constructor() {
        this.products = [
            { id: 1, name: 'Producto 1', price: 10.99 },
            { id: 2, name: 'Producto 2', price: 12.99 },
            { id: 3, name: 'Producto 3', price: 15.99 },
            { id: 4, name: 'Producto 4', price: 9.99 },
            { id: 5, name: 'Producto 5', price: 20.99 },
            { id: 6, name: 'Producto 6', price: 5.99 },
            { id: 7, name: 'Producto 7', price: 18.99 },
            { id: 8, name: 'Producto 8', price: 7.99 },
            { id: 9, name: 'Producto 9', price: 14.99 },
            { id: 10, name: 'Producto 10', price: 11.99 }
        ];
    }

    
}

module.exports = ProductManager;

  