const { default: styled } = require('styled-components');

export const FlexContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border: 1px solid lightgray;
  margin-bottom: 24px;
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(n + 2) {
    border-top: 1px solid lightgray;
  }
`;

export const Subject = styled.span`
  background-color: #f9fafc;
  padding: 10px;
  width: 80px;
  color: gray;
  font-weight: 600;
  height: 100%;
  border-right: 1px solid lightgray;
  flex-shrink: 0;
`;

export const Contents = styled.div`
  display: inline-block;
  background-color: white;
  padding: 0 5px;
`;
export const ContentButton = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #f0f1f3;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px;
  color: gray;
  &:hover {
    color: black;
  }
`;
