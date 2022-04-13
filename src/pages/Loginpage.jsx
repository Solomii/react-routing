import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, { replace: true }));

  }

  return (
    <div className="login_page">
      <h1>Login Page</h1>
      <form className="login_page_form" onSubmit={handleSubmit}>
        <input name="username" placeholder="Enter Name"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export {LoginPage}