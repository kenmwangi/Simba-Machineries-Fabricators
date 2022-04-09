import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import style from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.hours}>
        <p>
          <strong>Opening Hours: </strong> Mon - Sat: 8:00 am - 5:00 pm |{" "}
          <strong>Closed:</strong> Sundays
        </p>
        <p></p>
      </div>
      <div className={style.contact}>
        <BiPhoneCall />

        <p>Call Us Now</p>
        <p>+254 711 165132</p>
      </div>
    </section>
  );
}

export default Banner;
