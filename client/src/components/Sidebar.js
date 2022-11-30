import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats,setCat] = useState([]);

  useEffect(()=> {
    const getCats = async ()=> {
      const res = await axios.get('/categories');
      setCat(res.data);
    }
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        className="sidebarImg"
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""

        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          fugiat quibusdam eum iusto, ad, ullam culpa similique dolore soluta,
          nisi veritatis maiores amet architecto dolores earum nam minima maxime
          natus?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((category)=> (
          <Link to= {`/?cat=${category.name}`} className='link'>
          <li className="sidebarListItem" key={category._id}>{category.name}</li> 
          </Link>
        ))}
            
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebatSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
