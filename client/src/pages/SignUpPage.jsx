import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SetUserContext, UserContext } from "../contexts/UserContext.js";
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
  const userData = useContext(UserContext);
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
    </div>
  )
}

export default SignUpPage;
