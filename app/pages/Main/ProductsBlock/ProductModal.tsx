import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { ProductModalContent } from './styles';

import { IIngredient, IProduct } from 'interfaces/components/products';

import { toggleModal } from 'store/common/actions';
import { addToBasketAction } from 'store/basket/actions';

import Modal, { ModalPortal } from 'app/components/Modal';
import { Button } from 'app/components/Buttons';

interface IProductModal {
  name: string;
  activeProduct: IProduct;
}

const ProductModal: React.FC<IProductModal> = ({ name, activeProduct }) => {
  const [activeIngredients, setActiveIngredients] = useState([]);
  const dispatch = useDispatch();

  const ingredientsClickHandler = (ingredient: IIngredient) => {
    const ingredients = [...activeIngredients];
    // @ts-ignore
    const ingredientIndex: number = activeIngredients.indexOf(ingredient);

    if (ingredientIndex === -1) {
      // @ts-ignore
      ingredients.push(ingredient);
    } else {
      ingredients.splice(ingredientIndex, 1);
    }

    setActiveIngredients(ingredients);
  };

  const addToCardClickHandler = (item: IProduct) => {
    dispatch(addToBasketAction(item));
    dispatch(toggleModal({ name: 'productModal', open: false }));
  };

  return (
    <ModalPortal>
      <Modal nameProp={name} onClose={() => setActiveIngredients([])}>
        <ProductModalContent>
          <div className="img">
            <img src={activeProduct.image.url} alt={activeProduct.name} />
          </div>
          <div className="description">
            <div className="text">
              <h2>{activeProduct.name}</h2>
              <p>
                {activeProduct.description}
                {activeIngredients
                  ? activeIngredients.map(
                      (ingredient: IIngredient) => ` + ${ingredient.name}`
                    )
                  : null}
              </p>
            </div>
            <div className="additional">
              {activeProduct.ingredients.map((ingredient: any) => (
                <div
                  className={cn('additional_item', {
                    additional_item__active:
                      // @ts-ignore
                      activeIngredients.indexOf(ingredient) !== -1
                  })}
                  key={ingredient.id}
                  onClick={() => ingredientsClickHandler(ingredient)}
                >
                  <img
                    src={ingredient.image.url}
                    alt={ingredient.name}
                    title={ingredient.name}
                  />
                  <div className="additional_item_name">{ingredient.name}</div>
                  <div className="additional_item_price">
                    {ingredient.price}$<button className="add_button">+</button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="add-to-card"
              onClick={() => addToCardClickHandler(activeProduct)}
              isFullWidth
            >
              Add to card for{' '}
              {activeProduct.discountPrice || activeProduct.price}$
            </Button>
          </div>
        </ProductModalContent>
      </Modal>
    </ModalPortal>
  );
};

export default ProductModal;
