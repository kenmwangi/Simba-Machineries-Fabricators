import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
// Style
import style from "../styles/Header.module.css";
import { HeaderData } from "./Data/HeaderData";

function Header() {
  const [navToggle, setNavToggle] = React.useState(false);

  const ref = React.useRef();
  useOnClickOutside(ref, () => setNavToggle(false));

  const navToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  const closeNavLink = () => setNavToggle(false);

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <nav className={style.nav}>
            <Link href="/">
              <a className={style.nav__logo}>
                <Image src="/logo.png" alt="Logo" width={80} height={80} />
              </a>
            </Link>

            <div
              className={style.nav__menu}
              ref={ref}
              style={{ right: navToggle ? "0px" : "-100%" }}
            >
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

                <Link href="/contact" passHref>
                  <button
                    type="submit"
                    onClick={closeNavLink}
                    className={style.call__action}
                  >
                    Request a Quote
                  </button>
                </Link>
              </ul>

              <div className={style.nav__close}>
                <span>
                  <BiX onClick={navToggleHandler} />
                </span>
              </div>
            </div>
            <div className={style.nav__toggle} onClick={navToggleHandler}>
              <BiMenu />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
