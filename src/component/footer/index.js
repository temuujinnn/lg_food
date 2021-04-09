import React from "react";
import css from "./style.module.css";
import Heart from "../../Assets/heart-shape-silhouette.svg";
import Home from "../../Assets/home.svg";
import Pin from "../../Assets/pin.svg";
import Shop from "../../Assets/shopping-cart.svg";
const Footer = () => {
  return (
    <div className={css.Container}>
      <div className={css.left}>
        <div className={css.back}>
          <img className={css.image} src={Heart} alt="heart" />
        </div>
        <div className={css.back}>
          <img className={css.image} src={Home} alt="home" />
        </div>
      </div>
      <div className={css.middle}></div>
      <div className={css.right}>
        <div className={css.back}>
          <img className={css.image} src={Pin} alt="" />
        </div>
        <div className={css.back}>
          <img className={css.image} src={Shop} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
