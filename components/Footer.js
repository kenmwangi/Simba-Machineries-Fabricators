import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__content}>
          <section className={style.footer__data}>
            <h3 className={style.footer__title}>
              Pamoja Kenya Simba Machineries.
            </h3>
            <p className={style.footer__description}>
              One Stop shop for Affordable <br />& Best Machineries and
              Fabrication Services.
              {/* <br /> Visit our workshop for best prices and special
              discounts in all machineries */}
            </p>
            <div className={style.socials}>
              <a
                href="https://web.facebook.com/Kenya-Simba-Machineries-Fabricators-111297580767700/"
                target="_blank"
                rel="norefferer noreferrer"
                className={style.footer__social}
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://web.facebook.com/Kenya-Simba-Machineries-Fabricators-111297580767700/"
                target="_blank"
                rel="norefferer noreferrer"
                className={style.footer__social}
              >
                <RiTwitterFill />
              </a>
              <a
                href="https://web.facebook.com/Kenya-Simba-Machineries-Fabricators-111297580767700/"
                target="_blank"
                rel="norefferer noreferrer"
                className={style.footer__social}
              >
                <RiInstagramFill />
              </a>
            </div>
          </section>
          <section className={style.footer__data}>
            <h3 className={style.footer__subtitle}>Quick Links</h3>
            <ul>
              <li className={style.footer__item}>
                <Link href="/about">
                  <a className={style.footer__link}>Contact Us</a>
                </Link>
              </li>
              <li className={style.footer__item}>
                <Link href="/products">
                  <a className={style.footer__link}>Products</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className={style.footer__data}>
            <h3 className={style.footer__subtitle}>Company</h3>
            <ul>
              <li className={style.footer__item}>
                <Link href="/about">
                  <a className={style.footer__link}>About Us</a>
                </Link>
              </li>
              <li className={style.footer__item}>
                <Link href="/contact">
                  <a className={style.footer__link}>Request a Quote</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className={style.footer__data}>
            <h3 className={style.footer__subtitle}>Support</h3>
            <ul>
              <li className={style.footer__item}>
                <Link href="/about">
                  <a className={style.footer__link}>FAQs</a>
                </Link>
              </li>
              <li className={style.footer__item}>
                <Link href="/about">
                  <a className={style.footer__link}>Support Center</a>
                </Link>
              </li>
              <li className={style.footer__item}>
                <Link href="/contact">
                  <a className={style.footer__link}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <section className={style.footer__rights}>
          <p className={style.footer__copy}>
            &#169; Pamoja Kenya Simba Machineries & Fabricators,{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
          {/* <div className={style.footer__terms}>
            <a href="#" className={style.footer__terms__link}>
              Privacy Policy
            </a>
            <a href="#" className={style.footer__terms__link}>
              Terms & Agreement
            </a>
          </div> */}
        </section>
      </div>
    </footer>
  );
}

export default Footer;
