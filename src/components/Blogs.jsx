import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  // consume
  const {posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 min-h-screen max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] items-center'>
      {
        loading ? (
          <div className='flex flex-col items-center justify-center h-screen mt-[-100px]'> 
              <Spinner/> 
            </div>) : 
        (
          posts.length === 0 ? 
          (
            <div>
              <p>No Post found</p>
            </div>
          ) : 
          (
            posts.map((post) => (
              <BlogDetails key={post.id} post={post} />
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs