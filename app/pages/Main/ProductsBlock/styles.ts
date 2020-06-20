import styled from 'styled-components';

export const ProductsSection = styled.section`
  padding: 50px 0;
`;

export const ProductsSectionItemsWrapper = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  grid-gap: 30px;
`;

export const ProductsSectionItem = styled.article`
  cursor: pointer;
  padding: 15px;
  border-radius: 8px;

  &:hover {
    main figure img {
      transform: translateY(3px);
    }
  }

  main {
    figure img {
      transition: transform 0.5s;
    }

    h2 {
      font-size: 20px;
      line-height: 24px;
      margin: 8px 0px;
      min-height: 50px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: rgb(115, 121, 140);
      font-weight: 400;
      min-height: 100px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .old-price {
      color: rgb(115, 121, 140);
      text-decoration: line-through;
      margin-right: 8px;
    }
  }
`;
