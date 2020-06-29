import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  HistoryPageWrapper,
  HistoryTableWrapper,
  HistoryTable
} from './styles';

import { Container } from 'app/components/container';

const HistoryContainer = () => {
  const history = useSelector(state => state.history.data);

  const renderProduct = product => (
    <Fragment key={product.id}>
      {product.ingredients.length === 0 ? (
        <>
          <b>{product.name}</b> <br />
        </>
      ) : (
        <>
          <b>{product.name}</b> with{' '}
          {product.ingredients.map(ingredient => (
            <i key={ingredient.id}> {ingredient.name}</i>
          ))}
          <br />
        </>
      )}
    </Fragment>
  );

  return (
    <HistoryPageWrapper>
      <Container>
        <h2>History</h2>
        <HistoryTableWrapper>
          <HistoryTable>
            <thead>
              <tr>
                <th>Order number</th>
                <th>Date</th>
                <th>Total</th>
                <th>Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(
                ({ id, order_dt, order_data: { products, totalCost } }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{order_dt}</td>
                    <td>
                      $ {totalCost} / € {totalCost * 0.88}
                    </td>
                    <td>{products.map(product => renderProduct(product))}</td>
                    <td>
                      <span>Delivered</span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </HistoryTable>
        </HistoryTableWrapper>
      </Container>
    </HistoryPageWrapper>
  );
};

export default HistoryContainer;
