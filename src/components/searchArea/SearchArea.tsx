import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';

import { searchInputValue } from '../../store';
import { SearchContainer, SearchInput } from './style';

const SearchArea = () => {
  const [inputValue, setInputValue] = useRecoilState<string>(searchInputValue);
  const [localInputValue, setLocalInputValue] = useState<string>('');

  useEffect(() => {
    setLocalInputValue(inputValue);
  }, []);

  const debounceInput = useMemo(
    () =>
      debounce((query: string) => {
        setInputValue(query);
      }, 300),
    [],
  );

  const onChangeInput = (value: string) => {
    setLocalInputValue(value);
    debounceInput(value);
  };

  return (
    <SearchContainer>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        fontSize='14px'
        className='searchIcon'
      />
      <SearchInput
        type='text'
        placeholder='배우고 싶은 언어, 기술을 검색해보세요.'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeInput(e.target.value)
        }
        value={localInputValue}
      />
    </SearchContainer>
  );
};

export default SearchArea;
