import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import LogInForm from '../components/LogInForm'
import { SetUserContext, UserContext } from '../contexts/UserContext.js';

function LogInPage() {
  const setUser = useContext(SetUserContext);
  const navigate = useNavigate();

  const onSuccessLogin = (user) => {
    if (user) {
      setUser(user);
      navigate('/onsens');

    }
  }

  return (
    <div><LogInForm onSuccessLogin={onSuccessLogin} /></div>
  );
}
export default LogInPage;
