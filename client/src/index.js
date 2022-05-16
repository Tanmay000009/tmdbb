import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieForm from "./movieForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/add" element={<MovieForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
