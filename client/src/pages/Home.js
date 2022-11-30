import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Posts from '../posts/Posts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=> {
    const fetchPosts = async ()=> {
      const res = await axios.get('posts'+search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  },[search]);
  return (
    <div>
        <Header />
        <div className="home">
          <Posts posts = {posts} />
          <Sidebar />
        </div>
    </div>
  )
}

export default Home;