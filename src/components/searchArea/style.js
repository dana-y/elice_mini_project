import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 0 12px 46px;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  margin: 12px 0;
  &::placeholder {
    color: gray;
  }
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.color.elicePurple};
    outline: none;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  .searchIcon {
    position: absolute;
    top: 26px;
    left: 16px;
  }
`;
