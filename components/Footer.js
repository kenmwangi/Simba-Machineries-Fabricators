import Link from "next/link";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMailLine,
  RiPhoneLine,
  RiTwitterFill,
} from "react-icons/ri";
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
            <div className={style.footer__contact}>
              <div className={style.phone}>
                <h3 className={style.footer__title}>Let&apos;s Talk!</h3>
                <ul>
                  <li>
                    <span>
                      <RiMailLine className={style.footer__social} />
                    </span>
                    kenyasimbamachinery@gmail.com
                  </li>
                  <li>
                    <span>
                      <RiPhoneLine className={style.footer__social} />
                    </span>
                    +254 711 165132
                  </li>
                </ul>
              </div>
              <div className={style.socials}>
                <h3>Socials</h3>
                <div>
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
                  <Link
                    href="https://web.facebook.com/Kenya-Simba-Machineries-Fabricators-111297580767700/"
                    target="_blank"
                    rel="norefferer noreferrer"
                  >
                    <a className={style.footer__social}>
                      <RiInstagramFill />
                    </a>
                  </Link>
                </div>
              </div>
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
