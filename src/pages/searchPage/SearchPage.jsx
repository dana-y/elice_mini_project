import Categories from '../../components/categories/Categories';
import CourseCards from '../../components/courseCards/CourseCards';
import SearchArea from '../../components/searchArea/SearchArea';
import { Layout } from './style';

const SearchPage = () => {
  return (
    <Layout>
      <SearchArea />
      <Categories />
      <CourseCards />
    </Layout>
  );
};

export default SearchPage;
