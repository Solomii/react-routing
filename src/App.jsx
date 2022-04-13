import React from "react";

import { Routes, Route } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Home } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundpage";
import { Posts } from "./pages/Postspage";
import { SinglePage } from "./pages/Singlepage";

import { LoginPage } from "./pages/Loginpage";

import { PrivateRoute } from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";

import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          <Route path="posts" element={
            <PrivateRoute>
              <Posts/>
            </PrivateRoute>
          } />
          <Route path="posts/:id" element={<SinglePage />} />
        <Route path="login" element={<LoginPage />} />  
        <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
      </AuthProvider>  
    </>
  );
}

export default App;
