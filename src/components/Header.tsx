import styles from "../styles/Header.module.css";
import HeaderRoom from "react-headroom";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useBoolean } from "react-use";
import Link from "next/link";

import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function Header() {
  const [HeaderFixed, setHeaderFixed] = useState(true);
  const [hamburgerToggle, setHamburgerToggle] = useBoolean(false);
  let Header = cx({
    transparent: HeaderFixed && !hamburgerToggle,
    hamburgerMenu: hamburgerToggle,
    header: !hamburgerToggle,
  });
  let hamburger = cx({
    Hamburger: true,
    HamburgerFixed: hamburgerToggle,
  });
  let Restaurant = cx("nameRestaurant", "navLink");

  return (
    <header className={styles.headerContainer}>
      <HeaderRoom
        disable={hamburgerToggle}
        style={{ transform: hamburgerToggle ? "inherit" : undefined }}
        onPin={() => setHeaderFixed(false)}
        onUnfix={() => setHeaderFixed(true)}
      >
        <div className={Header}>
          <div>
            <Link href="./">
              <a className={Restaurant}>SinaFa</a>
            </Link>
            <Link href="./menu">
              <a className={styles.navLink}>menu</a>
            </Link>
            <Link href="./about">
              <a className={styles.navLink}>about</a>
            </Link>
            <Link href="./contact">
              <a className={styles.navLink}>contact</a>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <a className={styles.navLink}> log in</a>
            </Link>
            <Link href="/order">
              <a className={styles.navLink}> order</a>
            </Link>
          </div>
          <div className={hamburger}>
            <Hamburger
              toggled={hamburgerToggle}
              toggle={setHamburgerToggle}
              color={HeaderFixed && !hamburgerToggle ? "white" : "black"}
            />
          </div>
        </div>
      </HeaderRoom>
    </header>
  );
}
