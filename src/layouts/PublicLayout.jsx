import { Link, Outlet } from "react-router-dom";
import logo from '../images/menu-logo.png';


const PublicLayout = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <Link to={`signup`}>Signup</Link>
      </header>

      <Outlet />
      <footer>This is footer</footer>
    </div>
  )
}

export default PublicLayout;
