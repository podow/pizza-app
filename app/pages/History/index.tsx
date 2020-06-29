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
                    <td>
                      {products.map(product => (
                        <Fragment key={product.id}>
                          <b>{product.name}</b> x {product.count} <br />
                        </Fragment>
                      ))}
                    </td>
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
