import React from "react";
import Categories from "./Categories";
import ProductFeed from "./ProductFeed";
import HomeBag from "./HomeBag";
import "./index.css";

const Home = () => {
  return (
    <div className="home sm:flex">
      <Categories />
      <ProductFeed />
      <HomeBag />
    </div>
  );
};

export default Home;
