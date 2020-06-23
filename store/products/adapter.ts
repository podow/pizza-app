export const productAdapter = product => ({
  ...product,
  price: product.price,
  discountPrice: product.discrount ? product.price - product.discrount : null
});

export const productsAdapter = products =>
  products.map(product => productAdapter(product));
