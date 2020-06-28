import { IProduct } from 'interfaces/components/products';

export const productAdapter = (product: IProduct) => ({
  ...product,
  price: product.price,
  discountPrice: product.discountPrice
    ? (product.price - product.discountPrice).toFixed(2)
    : null,
  image: product.image
    ? process.env.API_HOST + product.image
    : '/static/images/product-placeholder.svg',
  ingredients: product.ingredients.map(ingredient => ({
    ...ingredient,
    image: process.env.API_HOST + ingredient.image,
    price: Number(ingredient.price).toFixed(2)
  })),
  count: 1
});

export const productsAdapter = (products: IProduct[]) =>
  products.map(product => productAdapter(product));
