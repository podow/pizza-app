import styled from 'styled-components';

export const TabsControls = styled.div`
  display: flex;
  margin-bottom: 60px;
  .tabs__control {
    color: #878787;
    cursor: pointer;
    &:not(:first-child) {
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '';
        margin: 0 10px;
        background-color: #be6c2f;
        height: 1px;
        width: 85px;
      }
    }
    &_active {
      color: #000000;
    }
  }
`;
