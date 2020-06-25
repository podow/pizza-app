import { IProduct } from 'interfaces/components/products';

export const productAdapter = (product: IProduct) => ({
  ...product,
  price: product.price,
  discountPrice: product.discountPrice
    ? product.price - product.discountPrice
    : null,
  image: process.env.API_HOST + product.image,
  count: 1
});

export const productsAdapter = (products: IProduct[]) =>
  products.map(product => productAdapter(product));
