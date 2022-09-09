import React from 'react';
import { faChartColumn , faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import {
  CardContainer,
  Description,
  IconText,
  Info,
  InfoIcon,
  InfoList,
  Label,
  Title,
} from './style';

interface CardProps {
  enrollType: number;
  isFree: boolean;
  title: string;
  shortDescription: string;
  id: string;
  logoURL: string;
}

const Card = ({
  enrollType,
  isFree,
  title,
  shortDescription,
  id,
  logoURL,
}: CardProps): JSX.Element => {
  return (
    <li key={id}>
      <CardContainer>
        <Label>{enrollType === 4 ? '구독' : isFree ? '무료' : '유료'}</Label>
        <Title>{title}</Title>
        <Description>{shortDescription}</Description>
        <InfoList logoURL={logoURL}>
          <Info>
            <InfoIcon icon={faChartColumn} />
            <IconText>난이도 : 미설정</IconText>
          </Info>
          <Info>
            <InfoIcon icon={faLaptop} />
            <IconText>수업 : 온라인</IconText>
          </Info>
          <Info>
            <InfoIcon icon={faCalendarDays} />
            <IconText>기간 : 무제한</IconText>
          </Info>
        </InfoList>
      </CardContainer>
    </li>
  );
};

export default Card;
