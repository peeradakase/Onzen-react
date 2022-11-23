import { SetUserContext, UserContext } from "../contexts/UserContext.js"
import { Link, Outlet } from "react-router-dom";
import { useState } from "react"
import logo from '../images/menu-logo.png';
import styles from './PublicLayout.module.css'

const PublicLayout = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <div className={styles.logoCenter}>
        <header className={styles.header}>
        <div className={styles.onsenLogo}>
        <img src={logo} alt="logo" />
        <Link to={`signup`}>Signup</Link>
      </div>
      </header>

      <Outlet />
      <footer>This is footer</footer>
        </div>
      </SetUserContext.Provider>
    </UserContext.Provider>

  )
}


export default PublicLayout;
