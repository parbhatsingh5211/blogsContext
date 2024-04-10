import React, { useContext } from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation} from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/AppContext';

const CategoryPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const catogery = location.pathname.split("/").at(-1);
  const {loading} = useContext(AppContext) 

  return (
    <div className='flex flex-col items-center'>
      <div>
        <Header/>
        {
          !loading &&
          <div className='mt-[70px] w-[670px] ml-[-30px]'>
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md mt-7"
            onClick={() => navigation(-1)}>
            Back
          </button>
          <h2 className='text-3xl font-bold mt-4'>
            Blogs on <span >{catogery}</span>
          </h2>
        </div>
        }
        <div className='mt-[-60px]'>
          <Blogs />
        </div>
        <Pagination/>
      </div>
    </div>
  )
}

export default CategoryPage