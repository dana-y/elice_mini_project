const { default: styled } = require('styled-components');

export const FlexContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border: 1px solid lightgray;
  margin-bottom: 24px;
  font-size: 14px;
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
  padding: 15px;
  width: 110px;
  color: gray;
  font-weight: 600;
  height: 100%;
  border-right: 1px solid lightgray;
  flex-shrink: 0;
`;

export const Contents = styled.div`
  display: inline-block;
  background-color: white;
  padding: 0 10px;
`;
export const ContentButton = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #f0f1f3;
  border-radius: 15px;
  padding: 8px 13px;
  margin: 5px;
  color: gray;
  &:hover,
  &.active {
    background-color: ${props => props.theme.color.elicePurple};
    color: white;
  }
`;
