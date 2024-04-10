import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className='flex flex-col items-center'>
      <div>
        <Header/>
        <div className='mt-[70px] w-[670px] ml-[-30px]'>
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md mt-7"
            onClick={() => navigation(-1)}>
            Back
          </button>
          <h2 className='text-3xl font-bold mt-4'>
            Blogs Tagged <span className='ml-4'>#{tag}</span>
          </h2>
        </div>
        <div className='mt-[-60px]'>
          <Blogs />
        </div>
        <Pagination/> 
      </div>
    </div>
  )
}

export default TagPage