import { useRecoilState, useRecoilValue } from 'recoil';
import { nowPage, total } from '../../store';
import {
  ArrowBtn,
  FlexPageNumberBox,
  PageContainer,
  PageNumber,
} from './style';

const Pagination = () => {
  const totalNum = useRecoilValue(total);
  const [nowPageNum, setNowPageNum] = useRecoilState(nowPage);

  const lastNum = Math.floor(totalNum / 20) + 1;
  const nums = [...Array(lastNum)].map((x, i) => i + 1);

  let showNums = nums.slice(
    nowPageNum - 5 < 0 ? 0 : nowPageNum - 5,
    nowPageNum + 4 > lastNum ? lastNum : nowPageNum + 4,
  );

  const onClickArrow = direction => {
    direction === 'right'
      ? setNowPageNum(prev => prev + 1)
      : setNowPageNum(prev => prev - 1);
    console.log(nowPageNum);
  };

  const onClickPageNum = async e => {
    setNowPageNum(Number(e.target.innerText));
    console.log(e.target.innerText);
    console.log(nowPageNum);
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
              className={nowPageNum === num && 'active'}
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
