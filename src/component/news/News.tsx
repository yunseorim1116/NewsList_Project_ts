import React from "react";
import GetContentData from "./GetContentData";

import styled from "styled-components";
// https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
const News = () => {
  return (
    <div>
      <HeaderDiv>The New York Times</HeaderDiv>
      <br />

      <Margin>
        <GetContentData />
      </Margin>
    </div>
  );
};
const Margin = styled.div`
  margin-right: 50px;
  margin-left: 50px;
`;
const HeaderDiv = styled.div`
  text-align: center;
  font-size: 28px;
`;

export default News;
