import React from "react";

import styled from "styled-components";
const Histroy = ({ setHistory }: any) => {
  let getHistory: Array<any> = JSON.parse(
    localStorage.getItem("keywords") || "[]"
  ); //질문하기

  const onRemoveClick = (id: any) => {
    console.log("여기로들어옴?");
    const hitory = getHistory.filter((history) => history.id !== id);
    setHistory(hitory);
    localStorage.setItem("keywords", JSON.stringify(hitory)); //셋 해줍니다 !
  };
  return (
    <MarginDiv>
      <>
        {getHistory.map((el) => {
          return (
            <>
              <FlexDivBox key={el.id}>
                <div>{el.text}</div>
                <Ximog
                  onMouseDown={() => {
                    onRemoveClick(el.id);
                  }}
                >
                  x
                </Ximog>
              </FlexDivBox>
              <TopMarginDiv />
            </>
          );
        })}
      </>
    </MarginDiv>
  );
};

const TopMarginDiv = styled.div`
  margin-bottom: 5px;
`;

const Ximog = styled.div`
  margin-left: 3px;
  cursor: pointer;
`;

const MarginDiv = styled.div`
  text-align: center;
  z-index: 99;
  border-radius: 4px;
  color: black;

  position: absolute;
  top: 120px;
  right: 730px;
`;

const FlexDivBox = styled.div`
  background-color: #d3d3d3;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  opacity: 0.8;
  border-radius: 8px;

  margin-left: 25px;
  margin-right: 25px;

  top: 20px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
export default Histroy;
