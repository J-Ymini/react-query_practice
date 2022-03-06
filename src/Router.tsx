import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import SuperHeroes from "./components/SuperHeroes.page";

const Router = () => {
  return (
    <BrowserRouter>
      <header style={{ marginBottom: "30px" }}>
        <Link style={{ marginRight: "20px" }} to="/">
          go to home
        </Link>
        <Link style={{ marginRight: "20px" }} to="/super-heroes">
          go to super heroes
        </Link>
        <Link to="/rq-super-heroes">go to rq super heroes</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
