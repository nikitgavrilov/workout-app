import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <ul className={"list"}>
            <h2 className={"list-title"}>Команда</h2>
            <li className={"item"}>Наша команда</li>
            <li className={"item"}>Тех. поддержка</li>
            <li className={"item"}>Контакты</li>
            <li className={"item"}>Отзывы учеников</li>
            <li className={"item"}>Политика обработки данных</li>
          </ul>
          <ul className={"list"}>
            <h2 className={"list-title"}>Тренировки</h2>
            <li className={"item"}>Программа по стритлифтингу</li>
            <li className={"item"}>Программа по воркауту</li>
            <li className={"item"}>Программа в тренажерном зале</li>
            <li className={"item"}>Бесплатные программы</li>
            <li className={"item"}>Бесплатные вебинары</li>
          </ul>
          <ul className={"list"}>
            <h2 className={"list-title"}>Соц. сети</h2>
            <li className={"item"}>Наш ютуб</li>
            <li className={"item"}>Группа SPORT в телеграм</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
