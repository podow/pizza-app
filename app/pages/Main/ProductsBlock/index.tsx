import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import {
  ProductsSection,
  ProductsSectionItemsWrapper,
  ProductsSectionItem
} from './styles';

import { toggleModal } from 'store/common/actions';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';
import Modal, { ModalPortal } from 'app/components/Modal';

const ProductsBlock = () => {
  const products = [
    {
      id: 1,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    },
    {
      id: 2,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    },
    {
      id: 3,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    },
    {
      id: 4,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    },
    {
      id: 5,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    },
    {
      id: 6,
      name: 'test',
      description: 'test',
      price: 10,
      discountPrice: null,
      image: {
        url:
          'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
      }
    }
  ];
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log(123);
    dispatch(toggleModal({ name: 'test', open: true }));
  };

  return (
    <ProductsSection>
      <Container>
        <ProductsSectionItemsWrapper>
          {products.map(
            ({
              id,
              name,
              description,
              price,
              discountPrice,
              image: { url }
            }) => (
              <ProductsSectionItem key={id} onClick={clickHandler}>
                <main>
                  <figure>
                    <img src={url} alt={name} title={name} />
                  </figure>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </main>
                <footer>
                  <div>
                    <span>
                      <span
                        className={cn({
                          'old-price': discountPrice
                        })}
                      >
                        {price}$
                      </span>
                      {discountPrice && <span>{discountPrice}$</span>}
                    </span>
                  </div>
                  <div>
                    <Button size="sm">Add to card</Button>
                  </div>
                </footer>
              </ProductsSectionItem>
            )
          )}
        </ProductsSectionItemsWrapper>
      </Container>
      <ModalPortal>
        <Modal nameProp="test">
          <div>test</div>
        </Modal>
      </ModalPortal>
    </ProductsSection>
  );
};

export default ProductsBlock;
