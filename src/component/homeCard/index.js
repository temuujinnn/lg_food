import React from "react";
import css from "./style.module.css";
import Friend from "../../Assets/pin.svg";
const HomeCard = () => {
  return (
    <div className={css.Container}>
      <div className={css.left}>
        <img className={css.Icon} src={Friend} alt="" />
      </div>
      <div className={css.right}>
        <h4 className={css.text}>Бидний тухай</h4>
      </div>
    </div>
  );
};
export default HomeCard;
