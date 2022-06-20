import React from "react";
import GetContentData from "./GetContentData";

import styled from "styled-components";
// https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
const News = () => {
  return (
    <div>
      <HeaderDiv>The New York Times</HeaderDiv>
      <br />

      <GetContentData />
    </div>
  );
};

const HeaderDiv = styled.div`
  text-align: center;
  font-size: 28px;
`;

export default News;
