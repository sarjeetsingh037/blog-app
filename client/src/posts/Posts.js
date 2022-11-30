import React from 'react'
import Post from '../components/Post'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map((p) => {
        return <Post post={p} />
      })}
    </div>
  )
}

export default Posts;