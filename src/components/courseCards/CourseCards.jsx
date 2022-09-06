import { useQuery } from 'react-query';
import { getData } from '../../apis/cards';
import Card from '../card/Card';
import { CardCount } from './style';

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
      <Card />
    </>
  );
};

export default CourseCards;
