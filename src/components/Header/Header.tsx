import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.body}>
          <h2 className={styles.logo}>
            <img src="/public/sport-logo.svg" alt="sport-logo" />
          </h2>
          <div
            onClick={() => setIsBurgerActive((prev) => !prev)}
            className={isBurgerActive ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
          >
            <span></span>
          </div>
          <nav className={isBurgerActive ? `${styles.nav} ${styles.active}` : `${styles.nav}`}>
            <ul className={styles.list}>
              <li className={styles.link}>Тренировки</li>
              <li className={styles.link}>Результаты</li>
              <li className={styles.link}>Кто мы?</li>
              <li className={styles.link}>Вакансии</li>
              <li className={styles.link}>
                <button>начать бесплатно</button>
              </li>
              <li className={styles.link}>
                <p>RU</p>
              </li>
              <li className={styles.link}>
                <p>EN</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
