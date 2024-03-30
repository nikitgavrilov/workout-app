import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  React.useEffect(() => {
    const body = document.body;
    if (isBurgerActive) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }
  }, [isBurgerActive]);

  const closeBurger = () => {
    setIsBurgerActive(false);
  };

  return (
    <header className={isBurgerActive ? `${styles.header} ${styles.active}` : `${styles.header}`}>
      <div className={"container"}>
        <div className={styles.body}>
          <h2 className={styles.logo}>
            <Link to="/">
              <ScrollLink to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeBurger}>
                <img src="images/icons/sport-logo.svg" alt="sport-logo" />
              </ScrollLink>
            </Link>
          </h2>
          <div
            onClick={() => setIsBurgerActive((prev) => !prev)}
            className={isBurgerActive ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
          >
            <span></span>
          </div>
          <nav className={isBurgerActive ? `${styles.nav} ${styles.active}` : `${styles.nav}`}>
            <ul className={styles.list}>
              <li className={styles.link}>
                <ScrollLink to="programs" spy={true} smooth={true} offset={-150} duration={500} onClick={closeBurger}>
                  Тренировки
                </ScrollLink>
              </li>
              <li className={styles.link}>
                <ScrollLink to="results" spy={true} smooth={true} offset={0} duration={500} onClick={closeBurger}>
                  Результаты
                </ScrollLink>
              </li>
              <li className={styles.link}>
                <ScrollLink to="whoWe" spy={true} smooth={true} offset={-100} duration={500} onClick={closeBurger}>
                  Кто мы?
                </ScrollLink>
              </li>
              <li className={styles.link}>
                <button>начать бесплатно</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
