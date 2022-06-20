import React from "react";

import NewsContent from "./NewsContent";
import { InewsSearch } from "../../type/type";
const NewsLiurist = ({ news }: { news: InewsSearch[] }) => {
  return (
    <div>
      {news &&
        news.map((data) => (
          <>
            <NewsContent news={data} key={data.id} />
          </>
        ))}
    </div>
  );
};

export default NewsLiurist;
