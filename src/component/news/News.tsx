import React from "react";
import Content from "./GetContentData";
import Search from "./Search";
// https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
const News = () => {

  

  return (
    <div>
      <h1>News</h1>

      <Content />
    </div>
  );
};

export default News;
