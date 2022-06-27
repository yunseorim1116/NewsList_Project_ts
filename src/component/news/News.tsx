import React from "react";
import GetContentData from "./ContentDatas";
import reset from "styled-reset";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const News = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PositionDiV>
        <HeaderDiv>The New York Times</HeaderDiv>
        <ClipListBoxdiv>
          <ClipList>Clip List</ClipList>
        </ClipListBoxdiv>
        <br />

        <Margin>
          <GetContentData />
        </Margin>
      </PositionDiV>
    </React.Fragment>
  );
};

const PositionDiV = styled.div``;

const ClipListBoxdiv = styled.div`
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 15px;
  font-family: "TheNautigal";
`;

const ClipList = styled.div`
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  background-color: #5f5f5f;
  color: white;
  border-radius: 4px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Margin = styled.div`
  margin-right: 300px;
  margin-left: 300px;
`;
const HeaderDiv = styled.div`
  padding: 30px;
  font-family: "TheNautigal";
  background: linear-gradient(to left, #202020, #303030);
  color: white;
  text-align: center;
  font-size: 28px;
`;

export default News;
