import React from "react";

import { InewsSearch } from "../../type/type";

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
            size="30"
            onClick={() => {
              dispatch(unclipNews(body));
            }}
          />
        </Icon>
      ) : (
        <Icon>
          <AiOutlineStar
            size="30"
            onClick={() => {
              dispatch(clipNews(body));
            }}
          />
        </Icon>
      )}

      <FlexBoxDiv>
        <div>
          <img
            src={`https://www.nytimes.com/${news.multimedia[0]?.url}`}
            width={450}
            height={350}
          />
        </div>

        <ContentDiv>
          <br />
          <TitleDiV> {news.headline.main}</TitleDiV>
          <br />
          <ArticleDiv>
            <div>{news.abstract}</div>
            <div>{news.byline.original}</div>
            {/* <NewsPicture news={news} /> */}{" "}
          </ArticleDiv>
        </ContentDiv>
      </FlexBoxDiv>
      <TopMarginDiv />

      <div>{test.toLocaleString()}</div>
      <br />
      <Alink href={`${news.web_url}`}>기사 전문 보기</Alink>
      <br />
      <br />
      <br />
    </Li>
  );
};

const FlexBoxDiv = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
`;

const ContentDiv = styled.div`
  /* box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%); */
  background-color: #ffffff;
  margin-left: 20px;

  padding: 50px;
`;

const ArticleDiv = styled.div`
  font-family: "Unna";
`;

const TitleDiV = styled.div`
  border-bottom: 1px solid #7c7c7c;
  font-size: 35px;
  color: #000000;
  font-family: "Unna";
`;

const TopMarginDiv = styled.div`
  margin-top: 10px;
`;

const Icon = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Alink = styled.a`
  font-family: "Unna";

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
