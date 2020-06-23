export const productAdapter = product => ({
  ...product,
  price: product.price,
  discountPrice: product.discountPrice
    ? product.price - product.discountPrice
    : null
});

export const productsAdapter = products =>
  products.map(product => productAdapter(product));
