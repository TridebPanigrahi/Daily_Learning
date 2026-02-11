let message: string = "Hello World";

let heading = document.createElement("h1");

heading.textContent = message;

document.body.appendChild(heading);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Awasome Gadge ${id}`,
    price: 99.3,
  };
}

const product = getProduct(1)


console.log(`The product ${product.name} costs $${product.price}`);