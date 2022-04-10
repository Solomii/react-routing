import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Home } from "./pages/Homepage";
import { NotFound } from "./pages/NotFoundpage";
import { Posts} from "./pages/Postspage";

const App = () => {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/posts">Posts</a>
        <a href="/notfound">NotFound</a>
      </header>
      <div>
        <h1>Get started with react-router</h1>
      </div>
    </>
  );
}

export default App;
