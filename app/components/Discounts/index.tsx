import React from 'react';
import { useSelector } from 'react-redux';

import { NewsListItemComponent } from 'app/pages/News/NewsListBlock';

import { Container } from '../container';
import CommonSlider from '../CommonSlider';
import { DiscountsWrapper } from './style';

const Discounts: React.FC<{}> = () => {
  const { promotions = [] } = useSelector(state => ({
    promotions: state.promotions.data
  }));
  return (
    <DiscountsWrapper>
      <Container>
        <h2>Скидки и Акции</h2>
      </Container>
      <CommonSlider
        peek={10}
        mainPeek={350}
        trackAddStyles={{ paddingTop: 25 }}
        disable={promotions.length <= 3}
      >
        {promotions &&
          promotions.map(item => (
            <NewsListItemComponent item={item} key={item.id} />
          ))}
      </CommonSlider>
    </DiscountsWrapper>
  );
};

export default Discounts;
