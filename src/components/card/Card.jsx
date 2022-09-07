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
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

const Card = ({
  enroll_type,
  is_free,
  title,
  short_description,
  id,
  logoURL,
}) => {
  return (
    <li key={id}>
      <CardContainer>
        <Label>{enroll_type === 4 ? '구독' : is_free ? '무료' : '유료'}</Label>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
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
