import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getData } from '../../apis/cards';
import {
  calcOffset,
  cardData,
  isfreeFiltered,
  nowPage,
  searchInputValue,
  total,
} from '../../store';
import Card from '../card/Card';
import { CardCount, CardsContainer } from './style';

const CourseCards = () => {
  const [getCardData, setCardData] = useRecoilState(cardData);
  const [totalCount, setTotalCount] = useRecoilState(total);
  const titleValue = useRecoilValue(searchInputValue);
  const pageNum = useRecoilValue(nowPage);
  const offset = useRecoilValue(calcOffset);
  const filterCondition = useRecoilValue(isfreeFiltered);

  const { data, isError, error } = useQuery(
    ['getData', pageNum, titleValue, filterCondition, offset],
    () => getData(titleValue, filterCondition, offset),
    {
      onSuccess: data => {
        setCardData(data.courses);
        setTotalCount(data.course_count);
      },
      onError: err => {
        console.log(err.message);
      },
    },
  );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <CardCount>전체 {totalCount}개</CardCount>
      <hr />
      <CardsContainer>
        {getCardData?.map(card => (
          <Card
            key={card.id}
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
