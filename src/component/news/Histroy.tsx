import React from "react";

const Histroy = ({ setHistory }: any) => {
  let getHistory: Array<any> = JSON.parse(
    localStorage.getItem("keywords") || "[]"
  ); //질문하기

  const onRemoveClick = (id: any) => {
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
              <div key={el.id}>
                <div>{el.text}</div>
                <div
                  onClick={() => {
                    onRemoveClick(el.id);
                  }}
                >
                  x
                </div>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
};

export default Histroy;
