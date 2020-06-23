export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number | string;
  discountPrice: number | string;
  image: {
    url: string;
  };
  ingredients: IIngredient[];
}

export interface IIngredient {
  id: number;
  name: string;
  price: string | number;
  image: {
    url: string;
  };
}
