import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const CardContainer = styled.article`
  width: 296px;
  height: 338px;
  padding: 28px 24px;
  background-color: white;
  border-radius: 8px;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
`;

const textHidden = css`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  ${textHidden}
  height: 60px;
  margin: 10px 0;
`;

export const Description = styled.div`
  height: 50px;
  font-size: 14px;
  color: #5e5f61;
  line-height: 1.6;
  ${textHidden}
  margin-bottom: 20px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
    background-image: url(${props => props.logoURL});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const InfoIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Info = styled.li`
  display: flex;
  align-items: center;
`;

export const IconText = styled.span`
  font-size: 12px;
  color: #7d7e80;
`;
