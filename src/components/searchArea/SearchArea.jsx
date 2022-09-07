import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContainer, SearchInput } from './style';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { searchInputValue } from '../../store';

const SearchArea = () => {
  const setInputValue = useSetRecoilState(searchInputValue);
  const queryClient = useQueryClient();

  const onChangeSearchInput = e => {
    setInputValue(e.target.value);
    queryClient.invalidateQueries('getData');
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
        onChange={onChangeSearchInput}
      />
    </SearchContainer>
  );
};

export default SearchArea;
