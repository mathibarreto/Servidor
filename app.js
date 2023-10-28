const express = require('express');
const ProductManager = require('./ProductManager'); 
const fs = require('fs');

const app = express();
const port = 3000; 

app.use(express.json());


const productManager = new ProductManager();


app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getAllProducts();
  if (limit) {
    const limitedProducts = products.slice(0, parseInt(limit, 10));
    res.json(limitedProducts);
  } else {
    res.json(products);
  }
});

app.get('/products/:pid', (req, res) => {
  const productId = req.params.pid;
  const producto = productManager.getProductById(productId);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
