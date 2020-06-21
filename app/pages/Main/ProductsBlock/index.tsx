import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import {
  ProductsSection,
  ProductsSectionItemsWrapper,
  ProductsSectionItem
} from './styles';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';

const ProductsBlock = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'test',
  //     description: 'test',
  //     price: 10,
  //     discountPrice: null,
  //     image: {
  //       url:
  //         'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png'
  //     }
  //   }
  // ];

  const products = useSelector(state => state.products.data);

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
              <ProductsSectionItem key={id}>
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
    </ProductsSection>
  );
};

export default ProductsBlock;
