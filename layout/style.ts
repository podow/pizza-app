import styled from 'styled-components';

export const WrapperStyle = styled.div`
  min-height: 100%;
  font-family: 'Rubik-Regular', sans-serif;
`;

export const Main = styled.main<{ backMenuOpened: boolean; color?: string }>`
  ${props => props.color && `background-color: ${props.color};`}
  padding-top: ${props => (props.backMenuOpened ? '190px' : '143px')};
  @media (max-width: 425px) {
    padding-top: ${props => (props.backMenuOpened ? '120px' : '87px')};
  }
  @media (max-width: 320px) {
    padding-top: ${props => (props.backMenuOpened ? '110px' : '72px')};
  }
`;
