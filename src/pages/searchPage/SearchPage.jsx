import Categories from '../../components/categories/Categories';
import CourseCards from '../../components/courseCards/CourseCards';
import Pagination from '../../components/pagination/Pagination';
import SearchArea from '../../components/searchArea/SearchArea';
import { Layout } from './style';

const SearchPage = () => {
  return (
    <Layout>
      <SearchArea />
      <Categories />
      <CourseCards />
      <Pagination />
    </Layout>
  );
};

export default SearchPage;
