import React from 'react';

import {
  HistoryPageWrapper,
  HistoryTableWrapper,
  HistoryTable
} from './styles';

import { Container } from 'app/components/container';

const HistoryContainer = () => {
  const history = [
    {
      id: 38,
      order_dt: '2020-06-28 11:22:11',
      order_data:
        '{"products":[{"id":"2","name":"Сырная","description":"Томатный соус, моцарелла","price":"10.00","discountPrice":7.5,"image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/cd3416f2eb57a1b53f03493938377c08.jpg","ingredients":[{"id":1,"name":"Mushrooms","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/75818ed6cd5e47f4057de2031a1a5ca2.png","price":"1.5"},{"id":3,"name":"Jalapenos","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/bb1ef8b587ad83e715d7ce269066df87.png","price":"1.2"}],"count":2},{"id":"1","name":"Аррива!","description":"Томаты, чоризо халяль, сладкий перец, красный лук, чеснок сухой, моцарелла, соус ранч, соус бургер, цыпленок","price":"10.00","discountPrice":null,"image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/f7a2572cf49aa5e56143c3fd5d194d2f.jpeg","ingredients":[{"id":1,"name":"Mushrooms","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/75818ed6cd5e47f4057de2031a1a5ca2.png","price":"1.5"},{"id":2,"name":"Cheese","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/c0fca7ac17029b0fdbd9b315a1e6d531.png","price":"2"},{"id":3,"name":"Jalapenos","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/bb1ef8b587ad83e715d7ce269066df87.png","price":"1.2"}],"count":1},{"id":"3","name":"Кисло-сладкий цыпленок","description":"Кисло-сладкий соус, моцарелла, цыпленок, томатный соус","price":"15.00","discountPrice":10,"image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/632f86c842776bfcf5c3ec35ac0e5b7d.jpg","ingredients":[{"id":3,"name":"Jalapenos","image":"https://innoscripta-pizza-back-podow.herokuapp.com/backend/uploads/bb1ef8b587ad83e715d7ce269066df87.png","price":"1.2"}],"count":1}],"totalCost":"35"}'
    }
  ];

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
                <th>Status</th>
                <th>Controls</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ id, order_dt, order_data }) => {
                const { totalCost } = JSON.parse(order_data);

                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{order_dt}</td>
                    <td>$ {totalCost}</td>
                    <td>
                      <span>Delivered</span>
                    </td>
                    <td>
                      <button>Details</button>
                      <button>Repeat order</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </HistoryTable>
        </HistoryTableWrapper>
      </Container>
    </HistoryPageWrapper>
  );
};

export default HistoryContainer;
