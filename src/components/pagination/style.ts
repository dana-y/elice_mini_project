import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const FlexPageNumberBox = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ArrowBtn = styled.button`
  color: #222;
  &:disabled {
    color: #ccc;
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
