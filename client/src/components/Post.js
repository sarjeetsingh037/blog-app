import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className='post'>
       {post.photo && ( <img className='postImg' src={PF +post.photo} alt="" />)}
        <div className="postInfo">
            <div className="postCats">
            {post.categories.map((category)=> {
              return <span className="postCat">{category}</span>
            })}
            </div>
            <Link to={`/post/${post._id}`} className='link'>
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
            <p>{post.username}</p>
        </div>
        <p className='postDesc'>
          {post.desc}    
        </p>
    </div>
  )
}

export default Post