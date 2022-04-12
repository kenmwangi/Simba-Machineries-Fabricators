import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCartAlt } from "react-icons/bi";
import {
  RiCustomerServiceLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiQuestionLine,
  RiSlideshowLine,
  RiTwitterFill,
} from "react-icons/ri";
import { sliderItems } from "../components/Data/SliderData";
import style from "../styles/Home.module.css";

function Home() {
  return (
    <React.Fragment>
      {/* HOME */}
      <section className={style.home}>
        <img
          src="/overlay.jpg"
          width={500}
          height={500}
          alt="Overlay Photo"
          className={style.home__img}
        />

        <div className={style.home__container}>
          <div className={style.home__data}>
            <h2 className={style.home__data__subtitle}>
              <b>Pamoja Kenya Simba </b>Machineries & Fabricators
            </h2>
            <h3 className={style.home__data__title}>
              <br /> ®️ No. 1 Shop for Farm Equipments
              <br /> ✅️ 100% Durable <br />
              ✅️Affordable <br /> ✅️ Environmental Friendly <br />
            </h3>
          </div>

          <div className={style.home__social}>
            <a
              href="https://web.facebook.com/Kenya-Simba-Machineries-Fabricators-111297580767700/"
              target="_blank"
              rel="norefferer noreferrer"
              className={style.home__social_link}
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="norefferer noreferrer"
              className={style.home__social_link}
            >
              <RiTwitterFill />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="norefferer noreferrer"
              className={style.home__social_link}
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={style.about}>
        <div className={style.about__container}>
          <div className={style.about__data}>
            <h2 className={style.about__title}>
              For Affordable Machineries <br /> & Fabrication Services
            </h2>
            <p className={style.about__description}>
              Why Us? One Stop shop for Affordable and Best Machineries and
              Fabrication Services. Visit our workshop for best prices and
              special discounts in all machineries.
            </p>
            <Link href="/products" passHref>
              <button className={style.button}>Check Our Products</button>
            </Link>
          </div>

          <div className={style.about__img}>
            {sliderItems.map((sliderItem) => (
              <div className={style.about__imgOverlay} key={sliderItem.id}>
                <Image
                  src={sliderItem.img}
                  alt="profile Overview"
                  className={style.about_image_one}
                  width={290}
                  height={350}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={style.why__us}>
        <div>
          <span>
            <RiQuestionLine />
          </span>
          <div className={style.item}>
            <h2 className={style.why__title}>
              Why Choose Pamoja Kenya Simba Machineries & Fabricators
            </h2>
            <p>
              Number 1 Leading Supplier of Farm Equipments and Fabrication
              Services in Kenya
            </p>
          </div>
        </div>

        <div>
          <span>
            <BiCartAlt />
          </span>
          <div className={style.item}>
            <h2 className={style.why__title}>Well-Stocked Stores</h2>
            <p>
              Our Stores are well-stocked with farm equipments and machineries
              equipped with latest technology.
            </p>
          </div>
        </div>

        <div>
          <span>
            <RiSlideshowLine />
          </span>
          <div className={style.title}>
            <h2 className={style.why__title}>Farm Equipments Exhibitions</h2>
            <p>
              We have participated in uncountable national agricultural shows
              all over Kenya thus allowing use identify the market niche and
              offer customers what they need.
            </p>
          </div>
        </div>

        <div>
          <span>
            <RiCustomerServiceLine />
          </span>
          <div className={style.title}>
            <h2 className={style.why__title}>Technical Support</h2>
            <p>
              Our Trained Staff and Agents Offers the best technical support,
              installation procedures and maintenance services. There is after
              sales service such as Maintanenance and Operating procedures.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
