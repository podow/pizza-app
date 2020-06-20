export const productAdapter = product => ({
  ...product,
  price: product.price,
  discountPrice: product.discrount ? product.price - product.discrount : null,
  image: {
    ...product.image,
    url:
      !product.image.url.includes('http') &&
      `${process.env.API_HOST}${product.image.url}`
  }
});

export const productsAdapter = products =>
  products.map(product => productAdapter(product));
