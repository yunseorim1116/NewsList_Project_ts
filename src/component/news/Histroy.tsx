import React from "react";

import styled from "styled-components";

interface IProps {
  setHistory: React.Dispatch<any>;
  inputRef: { current: HTMLInputElement | null };
}
const Histroy = ({ setHistory, inputRef }: IProps) => {
  let getHistory: Array<any> = JSON.parse(
    localStorage.getItem("keywords") || "[]"
  ); //질문하기

  const onRemoveClick = (id: number) => {
    const hitory = getHistory.filter((history) => history.id !== id);
    setHistory(hitory);
    localStorage.setItem("keywords", JSON.stringify(hitory)); //셋 해줍니다 !
    inputRef.current?.focus();
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
                  onMouseDown={(e) => {
                    e.preventDefault();
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

  margin-left: 1.5vw;
  margin-right: 1.5vw;

  top: 20px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
export default Histroy;
