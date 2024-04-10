import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination'


const Home = () => {
  return (
    <div>
      <Header/>
      <div className='h-full flex justify-center w-screen'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home