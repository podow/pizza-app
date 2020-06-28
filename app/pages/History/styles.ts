import styled from 'styled-components';
import { device } from 'app/breakpoints';
import { lightHover, mainColor, mainTransitionTime } from 'app/variables';

export const HistoryPageWrapper = styled.div`
  padding: 32px 0;

  h2 {
    margin-bottom: 20px;
  }
`;

export const HistoryTableWrapper = styled.div`
  overflow-y: auto;
`;

export const HistoryTable = styled.table`
  min-width: 600px;
  border-collapse: collapse;

  @media ${device.tablet} {
    width: 100%;
  }

  th {
    text-align: left;

    &:last-child {
      text-align: right;
    }
  }

  td {
    border-bottom: 1px solid #dedede;
    padding: 12px 0;
    
    span {
      color: #fff;
      background-color: #64be2f;
      border-radius: 4px;
      padding: 4px;
    }

    &:last-child {
      text-align: right;
    }
    
    button {
      background-color: ${mainColor};
      border-radius: 8px;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 6px 12px;
      transition: background-color ${mainTransitionTime};
      
      &:hover {
        background-color: ${lightHover};
      }
    
      & ~ button {
        margin-left: 8px;
      }
    }
`;
