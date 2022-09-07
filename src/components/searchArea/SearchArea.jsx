import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContainer, SearchInput } from './style';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { searchInputValue } from '../../store';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const SearchArea = () => {
  const [inputValue, setInputValue] = useRecoilState(searchInputValue);
  const [localInputValue, setLocalInputValue] = useState('');

  useEffect(() => {
    setLocalInputValue(inputValue);
  }, []);

  const debounceInput = debounce(value => {
    setInputValue(value);
  }, 300);

  const onChangeInput = value => {
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
        onChange={e => onChangeInput(e.target.value)}
        value={localInputValue}
      />
    </SearchContainer>
  );
};

export default SearchArea;
