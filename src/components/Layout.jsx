import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>2022</footer>  
    </>   
  )
}

export { Layout };