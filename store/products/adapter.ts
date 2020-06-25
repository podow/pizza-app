import { IProduct } from 'interfaces/components/products';

export const productAdapter = (product: IProduct) => ({
  ...product,
  price: product.price,
  discountPrice: product.discountPrice
    ? product.price - product.discountPrice
    : null,
  image: product.image
    ? process.env.API_HOST + product.image
    : '/static/images/product-placeholder.svg',
  ingredients: product.ingredients.map(ingredient => ({
    ...ingredient,
    image: process.env.API_HOST + ingredient.image
  })),
  count: 1
});

export const productsAdapter = (products: IProduct[]) =>
  products.map(product => productAdapter(product));
