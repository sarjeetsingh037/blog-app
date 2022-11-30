import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Context } from "../context/Context";

const SinglePost = () => {
  const PF = "http://localhost:5000/images/";
  // const location =useLocation();
  // const path = location.pathname.split("/")[2];
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const {user} = useContext(Context);
  useEffect(()=> {
    const getPost = async ()=> {
        const res = await axios.get('/posts/'+postId);
        setPost(res.data);
        console.log(res.data);
    };
    getPost();
  },[postId]);
  const handleDelete = async()=> {
    console.log(`/posts/${postId}`);
    console.log(user.username);
    try {
      await axios.delete(`/posts/${postId}`, {username:user.username});
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && ( <img className='postImg' src={PF +post.photo} alt="" />)}
        <h1 className="singlePostTitle">
         {post.title}
         {
          post.username === user?.username &&
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
          </div>
         }
          
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthur">
            Author: 
            <Link to= {`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
