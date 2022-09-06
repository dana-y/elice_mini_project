import { useQuery } from 'react-query';
import { getData } from '../../apis/cards';
import Card from '../card/Card';
import { CardCount, CardsContainer } from './style';

const CourseCards = () => {
  let title = '';
  let isfree = false;
  const { data, error } = useQuery(['getData', title, isfree], () =>
    getData(title, isfree),
  );
  return (
    <>
      <CardCount>전체 121개</CardCount>
      <hr />
      <CardsContainer>
        {data?.map(card => (
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
