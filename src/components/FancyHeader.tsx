import { NavLink } from "react-router-dom";
import styles from "../styles/FancyHeader.module.scss";

export function FancyHeader() {
  return (
    <nav className={styles.container}>
      <NavLink to="/">Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
}
