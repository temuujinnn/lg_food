import React from "react";
import NavBar from "../../component/Navbar";
import css from "./style.module.css";
import Img from "../../Assets/image.jpg";
import HomeCard from "../../component/homeCard";
const HomePage = () => {
  return (
    <div className={css.Container}>
      <div className={css.navbar}>
        <NavBar />
      </div>
      <div className={css.img}>
        <img className={css.Image} src={Img} alt="temka" />
        <div className={css.layer}>
          <h6 className={css.text}>Тавтай морил ЛЖ хүнс</h6>
          <div className={css.line}></div>
          <p className={css.paragraph}>
            Бид таньд хамгийн сайн чанарыг санал болгож байна Бид хамгийн
            чанартай бүтээгдэхүүн нийлүүлдэг Бид хамгийн түргэн шуурхай
          </p>
          <button className={css.Bttn}>Худалдан авалт</button>
        </div>
      </div>
      <div className={css.homeCard}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};
export default HomePage;
