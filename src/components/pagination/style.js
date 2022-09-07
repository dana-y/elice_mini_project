import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const FlexPageNumberBox = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ArrowBtn = styled.button`
  color: black;
  &:disabled {
    color: #999;
  }
`;

export const PageNumber = styled.button`
  width: 24px;
  height: 24px;
  color: #999;
  &.active,
  &:hover {
    background-color: #524fa1;
    color: white;
  }
`;
