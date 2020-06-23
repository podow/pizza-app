import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import {
  ProductsSection,
  ProductsSectionItemsWrapper,
  ProductsSectionItem
} from './styles';

import { toggleModal } from 'store/common/actions';

import { IProduct } from 'interfaces/components/products';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';
import ProductModal from './ProductModal';

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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
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
      },
      ingredients: [
        {
          id: 1,
          name: 'Mashrooms',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBA8CF1B6A99'
          },
          price: '1.5'
        },
        {
          id: 2,
          name: 'Cheese',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D'
          },
          price: '2'
        },
        {
          id: 3,
          name: 'Jalapenos',
          image: {
            url:
              'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DB9FFD8DC324'
          },
          price: '1.2'
        }
      ]
    }
  ];
  const [activeProduct, setActiveProduct] = useState({} as IProduct);
  const dispatch = useDispatch();

  const clickHandler = id => {
    const product: any = products.find(product => product.id === id);
    setActiveProduct(product);
    dispatch(toggleModal({ name: 'productModal', open: true }));
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
              <ProductsSectionItem key={id} onClick={() => clickHandler(id)}>
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

      {Object.keys(activeProduct).length !== 0 && (
        <ProductModal name="productModal" activeProduct={activeProduct} />
      )}
    </ProductsSection>
  );
};

export default ProductsBlock;
