import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation} from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const catogery = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
        <h2>
          Blogs on <span>{catogery}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage