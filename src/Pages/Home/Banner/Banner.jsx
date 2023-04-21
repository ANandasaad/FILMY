import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import Images from "../../../compontent/LazyLoadingImage/Images";
import ContentWrapper from "../../../compontent/contentWrapper/contentWrapper";

const Banner = () => {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/movie/upcoming");
  const url = useSelector((store) => store.home.url);

  useEffect(() => {
    console.log(url);
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);
  const handleQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      console.log(query);
      setQuery("");
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="Banner">
      {!loading && (
        <div className="back_drop_image">
          <Images src={backGround} />
        </div>
      )}
      <div className="opcity_layer">

      </div>
      <ContentWrapper>
        <div className="bannerContent">
          <span className="title">FILMY.</span>
          <span className="subTitle">
            Millions of Movies, Tv Shows and people to discover, Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
