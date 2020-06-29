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

export const productsAdapter = (products: IProduct[]) => {
  const pizzas = [];
  const snacks = [];
  const drinks = [];
  const desserts = [];

  products.map(product => {
    switch (Number(product.type)) {
      case 1:
        // @ts-ignore
        pizzas.push(productAdapter(product));
        break;
      case 2:
        // @ts-ignore
        snacks.push(productAdapter(product));
        break;
      case 3:
        // @ts-ignore
        drinks.push(productAdapter(product));
        break;
      case 4:
        // @ts-ignore
        desserts.push(productAdapter(product));
        break;
      default:
        // @ts-ignore
        pizzas.push(productAdapter(product));
        break;
    }
  });

  return { pizzas, snacks, drinks, desserts };
};

export const getType = type => {
  switch (Number(type)) {
    case 1:
      return 'Pizza';
    case 2:
      return 'Snack';
    case 3:
      return 'Drink';
    case 4:
      return 'Dessert';
    default:
      return 'Pizza';
  }
};
