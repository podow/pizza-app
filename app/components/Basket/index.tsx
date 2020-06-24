import React from 'react';
import Link from 'next/link';

import { BasketWrapper, BasketLink } from './styles';

const Basket = () => (
  <BasketWrapper>
    <Link href={{ pathname: '/basket' }}>
      <BasketLink>
        <span>Basket</span>
        <img src="/static/images/icons/icon-basket.svg" alt="Basket" />
      </BasketLink>
    </Link>
    <div className="dropdown">
      <ul>
        <li>
          <div className="image">
            <img
              src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
              alt=""
            />
          </div>
          <div className="description">
            <h3>title</h3>
            <span>10$</span>
          </div>
          <div className="controls">
            <div className="remove" />
            <div className="count">1</div>
          </div>
        </li>
        <li>
          <div className="image">
            <img
              src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
              alt=""
            />
          </div>
          <div className="description">
            <h3>title</h3>
            <span>10$</span>
          </div>
          <div className="controls">
            <div className="remove" />
            <div className="count">1</div>
          </div>
        </li>
        <li>
          <div className="image">
            <img
              src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/a8a18447921341209856cfdd5b5ea2af_584x584.png"
              alt=""
            />
          </div>
          <div className="description">
            <h3>title</h3>
            <span>10$</span>
          </div>
          <div className="controls">
            <div className="remove" />
            <div className="count">1</div>
          </div>
        </li>
      </ul>
      <div className="total">Итого: 20$</div>
    </div>
  </BasketWrapper>
);

export default Basket;
