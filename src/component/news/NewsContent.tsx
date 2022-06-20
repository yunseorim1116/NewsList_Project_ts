import React from "react";

import { InewsSearch } from "../../type/type";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clipNews, unclipNews } from "../reducer/userClipSlice";

const NewsContent = ({ news }: { news: InewsSearch }) => {
  const dispatch = useDispatch();
  const [clip, setClip] = useState<Boolean>(false);
  let body = {
    ...news,
  };

  return (
    <li>
      {news.clip ? (
        <button
          onClick={() => {
            dispatch(unclipNews(body));
          }}
        >
          기사 UnClip
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(clipNews(body));
          }}
        >
          기사 Clip
        </button>
      )}
      <div>{news.pub_date}</div>
      {/* <img src={`${news.url}`} /> */}
      <div>headline : {news.headline.main}</div>
      <div>absrtact : {news.abstract}</div>
      <div>{news.byline.original}</div>
      {/* <NewsPicture news={news} /> */}

      <a href={`${news.web_url}`}>기사 전문 보기</a>

      <br />
      <br />
      <br />
    </li>
  );
};

export default NewsContent;
