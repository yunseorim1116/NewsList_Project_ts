import React from "react";

import { InewsSearch } from "../../type/type";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clipNews, unclipNews } from "../reducer/userClipSlice";

import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

import moment from "moment";

import styled from "styled-components";

const NewsContent = ({ news }: { news: InewsSearch }) => {
  const dispatch = useDispatch();
  const [clip, setClip] = useState<Boolean>(false);
  let body = {
    ...news,
  };

  const test = new Date(news.pub_date);

  return (
    <Li>
      {news.clip ? (
        <Icon>
          <AiTwotoneStar
            onClick={() => {
              dispatch(unclipNews(body));
            }}
          />
        </Icon>
      ) : (
        <Icon>
          <AiOutlineStar
            onClick={() => {
              dispatch(clipNews(body));
            }}
          />
        </Icon>
      )}
      <div>{test.toLocaleString()}</div>
      {/* <img src={`${news.url}`} /> */}
      <div>headline : {news.headline.main}</div>
      <div>absrtact : {news.abstract}</div>
      <div>{news.byline.original}</div>
      {/* <NewsPicture news={news} /> */} <TopMarginDiv />
      <Alink href={`${news.web_url}`}>기사 전문 보기</Alink>
      <br />
      <br />
      <br />
    </Li>
  );
};

const TopMarginDiv = styled.div`
  margin-top: 10px;
`;

const Icon = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Alink = styled.a`
  margin-top: 50px;
  text-decoration: none;
  color: #7c7c7c;
`;

const Li = styled.li`
  list-style: none;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 30px;
`;
const ClipButton = styled.button`
  border: 700;
  font-weight: 700;
  color: white;
  cursor: pointer;
  border: 0;
  outline: 0;
  background-color: #585858;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  margin-bottom: 5px;
`;
export default NewsContent;
