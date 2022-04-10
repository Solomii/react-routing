import React from "react";

import { Routes, Route } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Home } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundpage";
import { Posts } from "./pages/Postspage";
import { Singlepage } from "./pages/Singlepage";


import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Singlepage />} />
        <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
