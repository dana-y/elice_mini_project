import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContainer, SearchInput } from './style';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchArea = () => {
  return (
    <SearchContainer>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        fontSize='14px'
        className='searchIcon'
      />
      <SearchInput placeholder='배우고 싶은 언어, 기술을 검색해보세요.' />
    </SearchContainer>
  );
};

export default SearchArea;
