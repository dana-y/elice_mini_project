import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContainer, SearchInput } from './style';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { searchInputValue } from '../../store';
import { debounce } from 'lodash';

const SearchArea = () => {
  const setInputValue = useSetRecoilState(searchInputValue);
  const queryClient = useQueryClient();

  const searchFilter = debounce(value => {
    queryClient.invalidateQueries('getData');
    setInputValue(value);
  }, 300);

  const onChangeSearchInput = value => {
    searchFilter(value);
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
        onChange={e => onChangeSearchInput(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchArea;
