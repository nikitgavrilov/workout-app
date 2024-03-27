import React from "react";
import styles from "./Programs.module.scss";

const Programs: React.FC = () => {
  return (
    <section className={styles.programs}>
      <div className={"container"}>
        <div className="info">
          <h2 className="info-title">Нас уже 20.000 базовчан! Присоединяйся!</h2>
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>Основные программы</h2>
          <div className={styles.cards}>text</div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
