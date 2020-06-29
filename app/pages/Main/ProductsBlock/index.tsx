import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ProductsSection,
  ProductsTypeSection,
  ProductsSectionItemsWrapper
} from './styles';

import { toggleModal } from 'store/common/actions';

import { IProduct } from 'interfaces/components/products';

import { Container } from 'app/components/container';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

const ProductsBlock = () => {
  const products = useSelector(state => state.products.data);
  const [activeProduct, setActiveProduct] = useState({} as IProduct);
  const dispatch = useDispatch();

  const clickHandler = product => {
    setActiveProduct(product);
    dispatch(toggleModal({ name: 'productModal', open: true }));
  };

  return (
    <ProductsSection>
      <Container>
        {Object.keys(products).map((type, index) => (
          <ProductsTypeSection key={index}>
            <h2>{type}</h2>
            <ProductsSectionItemsWrapper>
              {products?.[type]?.map(product => (
                <ProductCard
                  key={product.id}
                  item={product}
                  onClick={() => clickHandler(product)}
                />
              ))}
            </ProductsSectionItemsWrapper>
          </ProductsTypeSection>
        ))}
      </Container>

      {Object.keys(activeProduct).length !== 0 && (
        <ProductModal name="productModal" activeProduct={activeProduct} />
      )}
    </ProductsSection>
  );
};

export default ProductsBlock;
