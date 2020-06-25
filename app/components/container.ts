import styled from 'styled-components';

export const Container = styled.div<{ isTight?: boolean }>`
  margin-left: auto;
  margin-right: auto;
  padding-right: 25px;
  padding-left: 25px;
  width: 100%;
  position: relative;
  @media (min-width: 767px) {
    max-width: 800px;
  }
  @media (min-width: 992px) {
    max-width: ${props => (props.isTight ? '800px' : '1020px')};
  }
  @media (min-width: 1200px) {
    max-width: ${props => (props.isTight ? '800px' : '1020px')};
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1400px) {
    max-width: ${props => (props.isTight ? '800px' : '1070px')};
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1600px) {
    max-width: ${props => (props.isTight ? '800px' : '1170px')};
    padding-left: 0;
    padding-right: 0;
  }
`;
