import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ProductsSection, ProductsSectionItemsWrapper } from './styles';

import { toggleModal } from 'store/common/actions';

import { IProduct } from 'interfaces/components/products';

import { Container } from 'app/components/container';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../../../store/products/actions';

const ProductsBlock = () => {
  const products = useSelector(state => state.products.data);
  const [activeProduct, setActiveProduct] = useState({} as IProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const clickHandler = id => {
    const product: any = products.find(product => product.id === id);
    setActiveProduct(product);
    dispatch(toggleModal({ name: 'productModal', open: true }));
  };

  console.log(products);

  return (
    <ProductsSection>
      <Container>
        <ProductsSectionItemsWrapper>
          {products?.map(product => (
            <ProductCard
              key={product.id}
              item={product}
              onClick={() => clickHandler(product.id)}
            />
          ))}
        </ProductsSectionItemsWrapper>
      </Container>

      {Object.keys(activeProduct).length !== 0 && (
        <ProductModal name="productModal" activeProduct={activeProduct} />
      )}
    </ProductsSection>
  );
};

export default ProductsBlock;
