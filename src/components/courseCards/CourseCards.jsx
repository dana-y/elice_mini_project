import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getData } from '../../apis/cards';
import { cardData, freeStatus, total } from '../../store';
import Card from '../card/Card';
import { CardCount, CardsContainer } from './style';

const CourseCards = () => {
  let title = '';

  const [getCardData, setCardData] = useRecoilState(cardData);
  const [totalCount, setTotalCount] = useRecoilState(total);
  const filterCondition = useRecoilValue(freeStatus);

  const { data } = useQuery(
    ['getData', title, filterCondition],
    () => getData(title, filterCondition),
    {
      onSuccess: data => {
        setCardData(data.courses);
        setTotalCount(data.course_count);
      },
    },
  );

  return (
    <>
      <CardCount>전체 {totalCount}개</CardCount>
      <hr />
      <CardsContainer>
        {getCardData?.map(card => (
          <Card
            enroll_type={card.enroll_type}
            is_free={card.is_free}
            title={card.title}
            short_description={card.short_description}
            id={card.id}
            logoURL={card.logo_file_url}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default CourseCards;
