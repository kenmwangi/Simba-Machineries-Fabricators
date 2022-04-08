import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

import { BiX, BiMenu } from "react-icons/bi";
import { HeaderData } from "./Data/HeaderData";

// Style
import style from "../styles/Header.module.css";

function Header() {
  const [navToggle, setNavToggle] = React.useState(false);

  const navToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  const closeNavLink = () => setNavToggle(false);
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <Link href="/">
            <a className={style.nav__logo}>
              <Image src="/logo.png" alt="Logo" width={180} height={180} />
            </a>
          </Link>
          {navToggle ? (
            <div className={style.nav__menu}>
              <ul className={style.nav__list}>
                {HeaderData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={item.className}
                      onClick={closeNavLink}
                    >
                      <Link href={item.path}>
                        <a className={style.nav__link}>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}

                <Button type="submit">Get a Quote</Button>
              </ul>

              <div className={style.nav__close}>
                <span>
                  <BiX onClick={navToggleHandler} />
                </span>
              </div>
            </div>
          ) : (
            <div className={style.nav__toggle}>
              <BiMenu onClick={navToggleHandler} />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
