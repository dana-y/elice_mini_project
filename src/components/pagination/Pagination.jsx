import { useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { nowPage, offset, total } from '../../store';
import {
  ArrowBtn,
  FlexPageNumberBox,
  PageContainer,
  PageNumber,
} from './style';

const Pagination = () => {
  const totalNum = useRecoilValue(total);
  const setOffset = useSetRecoilState(offset);
  const [nowPageNum, setNowPageNum] = useRecoilState(nowPage);

  const lastNum = Math.floor(totalNum / 20) + 1;
  const nums = [...Array(lastNum)].map((x, i) => i + 1);

  const showNums = nums.slice(
    nowPageNum - 5 < 0 ? 0 : nowPageNum - 5,
    nowPageNum + 4 > lastNum ? lastNum : nowPageNum + 4,
  );

  const queryClient = useQueryClient();

  const onClickArrow = addNum => {
    setNowPageNum(prev => prev + addNum);
    setOffset(20 * nowPageNum);
    queryClient.invalidateQueries('getData');
    console.log(nowPageNum);
  };

  const onClickPageNum = e => {
    setNowPageNum(+e.target.innerText);
    console.log(e.target.innerText);
    setOffset(20 * nowPageNum);
    queryClient.invalidateQueries('getData');
  };

  return (
    <PageContainer>
      <h2 className='ir'>페이지탐색</h2>
      <ArrowBtn
        disabled={nowPageNum === 1 && true}
        onClick={() => onClickArrow(-1)}
      >
        {'<'}
      </ArrowBtn>
      <FlexPageNumberBox>
        {showNums.map(num => (
          <li key={num}>
            <PageNumber
              onClick={onClickPageNum}
              className={nowPageNum === num && 'active'}
            >
              {num}
            </PageNumber>
          </li>
        ))}
      </FlexPageNumberBox>
      <ArrowBtn
        disabled={nowPageNum === lastNum && true}
        onClick={() => onClickArrow(1)}
      >
        {'>'}
      </ArrowBtn>
    </PageContainer>
  );
};

export default Pagination;
