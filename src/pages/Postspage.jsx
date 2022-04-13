import { useState, useEffect } from "react";
import { useAuth } from "../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))

  }, []);

   const { signout } = useAuth();
   const navigate = useNavigate();
  return (
    <div>
      <h1>Posts Page</h1>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>Log Out</button>
      {
        posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export { Posts };