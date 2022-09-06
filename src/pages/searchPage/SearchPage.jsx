import Categories from '../../components/categories/Categories';
import SearchArea from '../../components/searchArea/SearchArea';
import { Layout } from './style';

const SearchPage = () => {
  return (
    <Layout>
      <SearchArea />
      <Categories />
    </Layout>
  );
};

export default SearchPage;
