const express = require("express");
const app = express();
const { products } = require("./02 - express-tutorials/data");

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products/:productID", (req, res) => {
  //console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  console.log(productID);
  let singleProduct = products.find((product) => product.id == productID);

  if (!singleProduct) {
    res.status(404).send("Product not found!");
  }
  res.json(singleProduct);
});

app.get("/api/products", (req, res) => {
  let product = products.map((product) => {
    let { id, name, image } = product;
    return { id, name, image };
  });

  res.json(product);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000.");
});
