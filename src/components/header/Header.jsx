import "./style.css";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Lev</em>
          </strong>
          <br />
          I'm a fullstack web-developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <NavLink to="/cv" className="btn">
          My CV
        </NavLink>
      </div>
    </header>
  );
}
