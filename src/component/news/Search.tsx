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
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandleFocus = () => {
    setIsFocus(true);
  };

  const onHandleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsFocus(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  return (
    <>
      <FlexDivBox>
        <form onSubmit={onSubmit}>
          <InputSearchDiv>
            <InputSearch
              ref={inputRef}
              onChange={onChange}
              onFocus={onHandleFocus}
              onBlur={onHandleBlur}
            />
          </InputSearchDiv>
  
        </form>
      </FlexDivBox>
      {focus ? <Histroy setHistory={setHistory} inputRef={inputRef} /> : ""}
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
