import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SetUserContext, UserContext } from "../contexts/UserContext.js";
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
  const setUser = useContext(SetUserContext);
  const navigate = useNavigate();

  const onSuccessSignup = (user) => {
    if (user) {
      setUser(user);
      navigate('/onsens');
    }
  }

  return (
    <div>
      <SignUpForm onSuccessSignup={onSuccessSignup}/>
      <div className="m-t-30 text-center">
      <Link to="/login" className="btn btn-link ">Log In</Link>
      </div>
    </div>
  )
}

export default SignUpPage;
