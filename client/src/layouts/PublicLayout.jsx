import { Link, Outlet } from "react-router-dom";
import logo from '../images/menu-logo.png';
import styles from './PublicLayout.module.css'

const PublicLayout = () => {
  return (
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
  )
}

export default PublicLayout;
