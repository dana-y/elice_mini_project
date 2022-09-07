import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { freeStatus } from '../../store';
import {
  Category,
  ContentButton,
  Contents,
  FlexContainer,
  Subject,
} from './style';

const Categories = () => {
  const [conditionRecoil, setConditionStatus] = useRecoilState(freeStatus);

  const [localFreeStatus, setFreeStatus] = useState(false);
  const [localPayStatus, setPayStatus] = useState(false);
  const [freeCondition, payCondition] = [
    { enroll_type: 0, is_free: true },
    { enroll_type: 0, is_free: false },
  ];

  const onClickFreeBtn = setFilter => {
    setFilter(prev => !prev);
    setConditionStatus([
      localFreeStatus ? freeCondition : {},
      localPayStatus ? payCondition : {},
    ]);
    console.log(conditionRecoil);
    console.log(localFreeStatus, localPayStatus);
  };

  return (
    <>
      <FlexContainer>
        <Category>
          <Subject>유형</Subject>
          <Contents>
            <ContentButton>과목</ContentButton>
            <ContentButton>챌린지</ContentButton>
            <ContentButton>테스트</ContentButton>
          </Contents>
        </Category>
        <Category>
          <Subject>진행방식</Subject>
          <Contents>
            <ContentButton>자유 선택형</ContentButton>
            <ContentButton>순차 완료형</ContentButton>
          </Contents>
        </Category>
        <Category>
          <Subject>분야</Subject>
          <Contents>
            <ContentButton>프로그래밍 기초</ContentButton>
            <ContentButton>데이터 분석</ContentButton>
            <ContentButton>웹</ContentButton>
            <ContentButton>인공지능</ContentButton>
            <ContentButton>알고리즘</ContentButton>
          </Contents>
        </Category>
        <Category>
          <Subject>난이도</Subject>
          <Contents>
            <ContentButton>과목</ContentButton>
            <ContentButton>입문</ContentButton>
            <ContentButton>초급</ContentButton>
            <ContentButton>중급</ContentButton>
            <ContentButton>고급</ContentButton>
          </Contents>
        </Category>
        <Category>
          <Subject>언어</Subject>
          <Contents>
            <ContentButton>C</ContentButton>
            <ContentButton>C++</ContentButton>
            <ContentButton>자바</ContentButton>
            <ContentButton>파이썬</ContentButton>
            <ContentButton>자바스크립트</ContentButton>
            <ContentButton>R</ContentButton>
            <ContentButton>HTML/CSS</ContentButton>
            <ContentButton>SQL</ContentButton>
            <ContentButton>아두이노</ContentButton>
            <ContentButton>스크래치</ContentButton>
          </Contents>
        </Category>
        <Category>
          <Subject>가격</Subject>
          <Contents>
            <ContentButton
              onClick={() => onClickFreeBtn(setFreeStatus)}
              className={localFreeStatus && 'active'}
            >
              무료
            </ContentButton>
            <ContentButton
              onClick={() => onClickFreeBtn(setPayStatus)}
              className={localPayStatus && 'active'}
            >
              유료
            </ContentButton>
          </Contents>
        </Category>
      </FlexContainer>
    </>
  );
};

export default Categories;
