import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import NavBarLink from "./NavbarLink";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div style={{display: "flex"}}>
        <img className={styles.beso} src="logo.png" alt="logo"/>
        <h1>Labial Shop</h1>
      </div>
      <NavBarLink />
      <CartWidget />
    </div>
  );
};

export default NavBar;