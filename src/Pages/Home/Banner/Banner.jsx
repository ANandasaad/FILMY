import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";



const Banner = () => {
  const [backGround,setBackGround]=useState('');
  const [query,setQuery]=useState('');
  const navigate=useNavigate();
  const {data,loading,error}=useFetch("/movie/upcoming");

  useEffect(()=>{
     const bg=data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
     setBackGround(bg);
  },[data])
  const handleQuery=(e)=>{
      if(e.key==='Enter' && query.length>0)
      {

        console.log(query);
        setQuery('');
        navigate(`/search/${query}`);
      }
  }
  return (
    <div className="Banner">
      <div className="wrapper">
        <div className="bannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of Movies, Tv Shows and people to discover, Explore now.
          </span>
          <div className="searchInput">
            <input type="text" placeholder="Search"  value={query} onChange={(e)=>setQuery(e.target.value)} onKeyUp={handleQuery} />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
