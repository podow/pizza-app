export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  count?: number;
  ingredients: IIngredient[];
}

export interface IIngredient {
  id: number;
  name: string;
  price: string | number;
  image: string;
}
