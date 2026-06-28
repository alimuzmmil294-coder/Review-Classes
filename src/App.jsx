import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/header" element={<Page />} />
        {/* <Route path="/header" element={<Page />} /> */}
      </Routes>
    </div>
  );
};

export default App;
