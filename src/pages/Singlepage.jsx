import { useParams } from "react-router-dom";

const Singlepage = () => {
  const {id} = useParams();
  return (
    <div>
       {id}
      <h1>Single Page</h1>
    </div>
  )
}

export { Singlepage };
