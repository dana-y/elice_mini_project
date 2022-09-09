import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nowPage, total } from '../../store';
import {
  ArrowBtn,
  FlexPageNumberBox,
  PageContainer,
  PageNumber,
} from './style';

const Pagination = (): JSX.Element => {
  const totalNum = useRecoilValue<number>(total);
  const [nowPageNum, setNowPageNum] = useRecoilState<number>(nowPage);

  const lastNum = Math.floor(totalNum / 20) + 1;
  const nums: number[] = [...Array(lastNum)].map((x, i) => i + 1);

  const showNums: number[] = nums.slice(
    nowPageNum - 5 < 0 ? 0 : nowPageNum - 5,
    nowPageNum + 4 > lastNum ? lastNum : nowPageNum + 4,
  );

  const onClickArrow = (direction: string): void => {
    direction === 'right'
      ? setNowPageNum(prev => prev + 1)
      : setNowPageNum(prev => prev - 1);
  };

  const onClickPageNum = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setNowPageNum(Number(e.currentTarget.innerText));
  };

  return (
    <PageContainer>
      <h2 className='ir'>페이지탐색</h2>
      <ArrowBtn
        disabled={nowPageNum === 1 && true}
        onClick={() => onClickArrow('left')}
      >
        {'<'}
      </ArrowBtn>
      <FlexPageNumberBox>
        {showNums.map(num => (
          <li key={num}>
            <PageNumber
              onClick={e => onClickPageNum(e)}
              className={nowPageNum === num ? 'active' : ''}
            >
              {num}
            </PageNumber>
          </li>
        ))}
      </FlexPageNumberBox>
      <ArrowBtn
        disabled={nowPageNum === lastNum && true}
        onClick={() => onClickArrow('right')}
      >
        {'>'}
      </ArrowBtn>
    </PageContainer>
  );
};

export default Pagination;
