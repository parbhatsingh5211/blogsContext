import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-[670px] flex flex-col'>
        <NavLink to={`/blog/${post.id}`}>
            <span className='text-lg font-bold '>{post.title}</span>
        </NavLink>
        <p className='text-xs font-semibold mt-2'>
            By
            <span className='mx-1 italic'>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='underline'>{post.category}</span>
            </NavLink>
        </p>
        <p className='text-xs font-semibold'>Posted on {post.date}</p>
        <p className='text-md text-justify mt-2 leading-5'>{post.content}</p>
        <div className='flex'>
            {
                post.tags.map( (tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className='text-blue-700 text-xs mr-3 underline'>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default BlogDetails

