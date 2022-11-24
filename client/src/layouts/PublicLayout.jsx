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

              <div className="row">

                <div className="col-4"></div>

              <div className="text-center col-4">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>

              <div className="col-4 text-center m-t-20">
                  <Link to={`signup`}>Signup</Link>
                </div>
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
