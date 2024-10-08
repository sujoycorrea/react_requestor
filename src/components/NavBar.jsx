import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <div id="mySidenav" className={styles.sidenav}>
        <a
          //   href="javascript:void(0)"
          className={styles.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/createTicket"}>Create Ticket</NavLink>
        <NavLink to={"/tickets"}>My Tickets</NavLink>
      </div>
      <span className={styles.menu} onClick={openNav}>
        &#9776; Menu
      </span>
    </div>
  );
}
