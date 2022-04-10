import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Home } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundpage";
import { Posts } from "./pages/Postspage";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
