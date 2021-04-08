import React from "react";
import css from "./style.module.css";
import Logo from "../../Assets/menu-button.svg";
const NavBar = () => {
  return (
    <div className={css.Container}>
      <div className={css.text}>
        <h6>ЛЖ ХҮНС</h6>
        <div className={css.logo}>
          <img className={css.image} src={Logo} alt="tmke" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
