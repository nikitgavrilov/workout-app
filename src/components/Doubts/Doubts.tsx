import React from "react";
import styles from "./Doubts.module.scss";

const Doubts: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.doubts}>
      <div className={"container"}>
        <h2 className={"title"}>Сомневаешься?</h2>
        <h3 className={styles.subTitle}>Оставь заявку, мы с тобой свяжемся и ответим на любые вопросы!</h3>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.info}>
            <div className={styles.support}>
              <a href="mailto:support@mimworkout.com">support@mimworkout.com</a>
            </div>
            <div className={styles.social}>
              <h2>Связаться через соц.сети</h2>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <a href="#">
                    <img src="images/icons/instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="#">
                    <img src="images/icons/telegram.svg" alt="telegram" />
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="#">
                    <img src="images/icons/youtube.svg" alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.fields}>
            <div className={styles.email}>
              <input type="text" placeholder="Твой Email" />
            </div>
            <div className={styles.name}>
              <input type="text" placeholder="Как тебя зовут?" />
            </div>
            <div className={styles.tel}>
              <input type="tel" placeholder="Телефон по желанию" />
            </div>
            <button type="submit" className={styles.submit}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Doubts;
