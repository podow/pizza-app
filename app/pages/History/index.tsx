import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import {
  HistoryPageWrapper,
  HistoryTitleWrapper,
  HistoryTableWrapper,
  HistoryTable
} from './styles';
import { logoutAction } from 'store/auth/actions';

import { Container } from 'app/components/container';
import { Button } from 'app/components/Buttons';

const HistoryContainer = () => {
  const history = useSelector(state => state.history.data);
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(logoutAction());
    Router.push('/');
  };

  return (
    <HistoryPageWrapper>
      <Container>
        <HistoryTitleWrapper>
          <h2>History</h2>
          <Button size="sm" onClick={logoutClickHandler}>
            Log out
          </Button>
        </HistoryTitleWrapper>
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
