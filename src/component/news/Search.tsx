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

  return (
    <>
      <FlexDivBox>
        <form>
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
  margin-bottom: 50px;
  background: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);

  max-width: 1400px;
  outline: none;
`;
const InputSearch = styled.input`
  background: none;
  border: none;
  outline: none;
  height: 1.9792vw;
  padding: 0 1.5625vw 0.1042vw;
  width: 300px;
`;

export default Search;
