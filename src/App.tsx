import React from "react";
import { Routes, Route } from "react-router-dom";

import Clip from "./component/clip/Clip";
import News from "./component/news/News";

import { Reset } from "styled-reset";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/clip" element={<Clip />} />
      </Routes>
    </>
  );
}

export default App;
