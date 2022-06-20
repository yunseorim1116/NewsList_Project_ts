import React, { useState, useEffect, MouseEventHandler, useRef } from "react";
import axios from "axios";
import Histroy from "./Histroy";
import styled from "styled-components";

interface Iprops {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setHistory: React.Dispatch<any>;
}

const Search = ({ onChange, setHistory }: Iprops) => {
  const [focus, setIsFocus] = useState(false);

  const onHandleFocus = () => {
    setIsFocus(true);
  };

  const onHandleBlur = (e: any) => {
    e.preventDefault();
    setIsFocus(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("섭밋!");
  };
  return (
    <>
      <FlexDivBox>
        <form onSubmit={onSubmit}>
          <InputSearchDiv>
            <InputSearch
              onChange={onChange}
              onFocus={onHandleFocus}
              onBlur={onHandleBlur}
            />
          </InputSearchDiv>
          {/* <button type="submit">검색</button> */}
        </form>
      </FlexDivBox>
      {focus ? <Histroy setHistory={setHistory} /> : ""}
    </>
  );
};

const FlexDivBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const InputSearchDiv = styled.div`
  background: #fff;
  border: none;
  border-radius: 22px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);

  max-width: 560px;
  outline: none;
`;
const InputSearch = styled.input`
  background: none;
  border: none;
  height: 44px;
  outline: none;
  padding: 0 40px 2px;
  width: 100%;
`;

export default Search;
