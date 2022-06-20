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
    <div>
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
            </>
          );
        })}
      </>
    </div>
  );
};

const Ximog = styled.div`
  margin-left: 2px;
  cursor: pointer;
`;

const FlexDivBox = styled.div`
  display: flex;
  justify-content: center;
`;
export default Histroy;
