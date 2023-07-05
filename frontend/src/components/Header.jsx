import React from "react";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ onSignOut, email }) {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Mesto" />
      <nav className="navigate">
        {pathname === "/sign-up" && (
          <Link to="/sign-in" className="navigate__link" onClick={onSignOut}>
            Войти
          </Link>
        )}
        {pathname === "/sign-in" && (
          <Link to="/sign-up" className="navigate__link" onClick={onSignOut}>
            Регистрация
          </Link>
        )}
        {pathname === "/" && (
          <div className="navigate__block">
            <p className="navigate__email">{email}</p>
            <Link to="/sign-up" className="navigate__link" onClick={onSignOut}>
              Выйти
            </Link>
          </div>
        )}
        {pathname === "/*" && (
          <Link to="/sign-in" className="navigate__link" onClick={onSignOut}>
            Регистрация
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
