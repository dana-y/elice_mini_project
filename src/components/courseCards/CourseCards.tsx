import React from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import getData from '../../apis/cards';
import {
  calcOffset,
  isfreeFiltered,
  nowPage,
  searchInputValue,
  total,
} from '../../store';
import Card from '../card/Card';
import { CardCount, CardsContainer, Line } from './style';

const CourseCards = (): JSX.Element => {
  const setTotalNum = useSetRecoilState(total);
  const titleValue = useRecoilValue<string>(searchInputValue);
  const pageNum = useRecoilValue<number>(nowPage);
  const offset = useRecoilValue<number>(calcOffset);
  const apiFilterCondition = useRecoilValue<object[]>(isfreeFiltered);

  const { data, isError, error } = useQuery(
    ['getData', pageNum, titleValue, apiFilterCondition, offset],
    () => getData(titleValue, apiFilterCondition, offset),
    {
      onSuccess: data => setTotalNum(data.course_count),
      onError: (err: any) => {
        console.log(err.message);
      },
      keepPreviousData: true,
    },
  );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <CardCount>전체 {data?.course_count}개</CardCount>
      <Line />
      <CardsContainer>
        {data?.courses.map(
          (card: {
            id: string;
            enroll_type: number;
            is_free: boolean;
            title: string;
            short_description: string;
            logo_file_url: string;
          }) => (
            <Card
              key={card.id}
              enrollType={card.enroll_type}
              isFree={card.is_free}
              title={card.title}
              shortDescription={card.short_description}
              id={card.id}
              logoURL={card.logo_file_url}
            />
          ),
        )}
      </CardsContainer>
    </>
  );
};

export default CourseCards;
