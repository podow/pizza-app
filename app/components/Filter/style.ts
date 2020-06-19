import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 32%;
  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const FilterBody = styled.div`
  background-color: #ffffff;
  height: auto;
  padding: 30px 20px;
  top: 10px;
  overflow-y: auto;
  position: sticky;
  top: 20%;
  border-radius: 8px;
  @media (max-width: 320px) {
    overflow-x: hidden;
  }
`;

export const FilterClassesCheckboxes = styled.div`
  display: flex;
  @media (max-width: 375px) {
    flex-wrap: wrap;
    div {
      margin-bottom: 10px;
    }
  }
`;

export const FilterTypes = styled.ul`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterType = styled.li`
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 0;
  margin-right: 10px;
  padding-bottom: 5px;
`;

export const FormWrapper = styled.div`
  > * {
    margin-bottom: 20px;
  }
`;

export const FilterClasses = styled.div``;
