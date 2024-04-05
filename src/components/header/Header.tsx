import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo__beaver.png";

const Header = ({ headerMove }: { headerMove: boolean }) => {
  const [isToggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const goTop = () => {
    window.scrollTo({
      top: 0 && 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={headerMove ? "header scroll" : "header"}>
      <div className="header__logo-container">
        <a className="header__logo" href={"/"}>
          <img
            className={
              headerMove ? "header__logo-img hide" : "header__logo-img"
            }
            src={Logo}
            alt="logo"
          />
        </a>
        <h3 className="header__crypto-beaver" onClick={goTop}>
          Crypto Beaver
        </h3>
      </div>
      <div className="header__navigation">
        <ul>
          <li>
            <Link to={"#home"} onClick={goTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"#market"}>Market</Link>
          </li>
          <li>
            <Link to={"#choose_us"}>Choose us</Link>
          </li>
          <li>
            <Link to={"#footer"}>Join us</Link>
          </li>
        </ul>
      </div>
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div
          className="menu-button"
          onClick={() => setToggleBurgerMenu((prev) => !prev)}
        ></div>
      </label>
      {isToggleBurgerMenu && (
        <div className={isToggleBurgerMenu ? "menu-toggle_list" : ""}>
          <label className="menu-button-close-container" htmlFor="menu-toggle">
            <div
              className="menu-button-close"
              onClick={() => setToggleBurgerMenu((prev) => !prev)}
            ></div>
          </label>
          <ul>
            <li onClick={() => setToggleBurgerMenu((prev) => !prev)}>
              <Link to={"#home"} onClick={goTop}>
                Home
              </Link>
            </li>
            <li onClick={() => setToggleBurgerMenu((prev) => !prev)}>
              <Link to={"#market"}>Market</Link>
            </li>
            <li onClick={() => setToggleBurgerMenu((prev) => !prev)}>
              <Link to={"#choose_us"}>Choose us</Link>
            </li>
            <li onClick={() => setToggleBurgerMenu((prev) => !prev)}>
              <Link to={"#footer"}>Join us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
