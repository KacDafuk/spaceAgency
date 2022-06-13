import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNavbar from "./useNavbar";
import ModalBackground from "../ModalBackground/NavModalBackground";
const Navbar = () => {
  const { isActiveLink, navVisible, toggleNav } = useNavbar();
  return (
    <nav className={styles.nav}>
      <ModalBackground navVisible={navVisible} />
      <div className={styles.navLogo} />
      <ul
        className={`${styles.navLinks} ${
          navVisible ? styles.navActive : styles.navHidden
        }`}
      >
        <li>
          <Link
            to="/home"
            className={`${isActiveLink("/home") && styles.activeLink}`}
          >
            {" "}
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/destination"
            className={`${isActiveLink("/destination") && styles.activeLink}`}
          >
            DESTINATION
          </Link>
        </li>
        <li>
          <Link
            to="/crew"
            className={`${isActiveLink("/crew") && styles.activeLink}`}
          >
            CREW
          </Link>
        </li>
        <li>
          <Link
            to="/technology"
            className={`${isActiveLink("/technology") && styles.activeLink}`}
          >
            TECHNOLOGY
          </Link>
        </li>
      </ul>
      <button className={styles.toggleBtn} onClick={toggleNav}>
        <i className="fa-solid fa-bars fa-2x" />
      </button>
    </nav>
  );
};

export default Navbar;
