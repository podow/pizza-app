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

export const ProductModalContent = styled.div`
  display: flex;

  .img {
    flex: 2;
  }

  .description {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .additional {
    display: flex;

    &_item {
      cursor: pointer;
      position: relative;
      min-height: 108px;
      width: 87px;
      box-shadow: rgba(6, 5, 50, 0.1) 0px 10px 20px;
      text-align: left;
      margin: 55px 0px 0px 14px;
      padding: 8px 8px 16px;
      background: rgb(255, 255, 255);
      border-radius: 16px;
      transition: box-shadow 0.05s ease-out 0s;

      &:hover {
        box-shadow: rgba(6, 5, 50, 0.1) 0px 4px 10px;
      }

      &__active {
        background-color: gainsboro;
      }

      &_name {
        font-size: 12px;
        margin-bottom: 4px;
      }

      &_price {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          border: 0;
          cursor: pointer;
          border-radius: 25px;
          background-color: #be6c2f;
          color: #fff;
          font-weight: 800;
          transition: background-color 0.3s;

          &:hover {
            background-color: #af6025;
          }
        }
      }
    }
  }
`;
