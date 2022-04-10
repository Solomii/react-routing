import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h1>This page doesn't exist. Go <Link to="/">Home</Link> </h1>
    </div>
  )
}

export { NotFoundPage };