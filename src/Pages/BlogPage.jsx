import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs]=useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading} = useContext(AppContext); 

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);

    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try{
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect( () => {
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className='flex flex-col items-center justify-center '>
      <div>
        <Header/>
        <div className='mt-[90px]'>
          { !loading &&
            <button className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigation(-1)}>
            Back
          </button>}
        </div>
        {
          loading ? (
            <div className='flex flex-col items-center justify-center h-screen mt-[-100px]'> 
              <Spinner/>
            </div>
          ):
          (
            blog ? (
              <div className='mt-4'>
                <BlogDetails post={blog}/>
                <h2 className='text-3xl font-bold mt-[80px]'>Related Blogs</h2>
                {
                  relatedBlogs.map( (post) => (
                    <div className='mt-7 mb-11'
                        key={post.id}>
                        <BlogDetails post={post}/>
                    </div>
                  ))
                }
              </div>) : 
              (<p> No Blog Found</p>
            )
          )
        }
      </div>
    </div>
  )
}

export default BlogPage