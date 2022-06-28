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
  top: 40px;
  right: 15px;
  font-family: "Unna";
`;

const ClipList = styled.div`

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
  color: #464646;
  text-align: center;
  font-size: 70px;
  font-family: "Unna";
`;

export default News;
