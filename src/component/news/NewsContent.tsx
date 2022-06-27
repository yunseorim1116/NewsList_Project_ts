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

export default NewsContent;
