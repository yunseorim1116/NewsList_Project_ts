import React, { useState, useEffect, MouseEventHandler, useRef } from "react";
import axios from "axios";
import Histroy from "./Histroy";

interface Iprops {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setHistory: React.Dispatch<any>;
}

const Search = ({ onChange, setHistory }: Iprops) => {
  const [focus, setIsFocus] = useState(false);

  const onHandleFocus = () => {
    setIsFocus(true);
  };

  const onHandleBlur = () => {
    setIsFocus(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("섭밋!");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
        />
        <button type="submit">검색</button>
      </form>
      {focus ? <Histroy setHistory={setHistory} /> : ""}
    </>
  );
};

export default Search;
