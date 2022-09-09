import styled from "styled-components";

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
  background-color: #f9fafc;
`;

export const Subject = styled.div`
  color: gray;
  padding: 15px;
  width: 110px;
  font-weight: 600;
  flex-shrink: 0;
`;

export const Contents = styled.div`
  border-left: 1px solid lightgray;
  display: inline-block;
  height: 100%;
  background-color: white;
  padding: 0 10px;
  flex-grow: 1;
`;

export const ContentButton = styled.button<{ theme: [] }>`
  display: inline-block;
  text-align: center;
  background-color: #f0f1f3;
  border-radius: 15px;
  padding: 8px 13px;
  margin: 8px 5px;
  color: gray;
  &:hover,
  &.active {
    background-color: #722DE9;
    color: white;
  }
`;
