export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  count?: number;
  ingredients: IIngredient[];
  type: string | number;
}

export interface IIngredient {
  id: number;
  name: string;
  price: string | number;
  image: string;
}
