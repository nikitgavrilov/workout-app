import React from "react";
import styles from "./WhoWe.module.scss";

const WhoWe: React.FC = () => {
  return (
    <section id="whoWe">
      <div className={"container"}>
        <div className={styles.body}>
          <div className={styles.column}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src="images/whoWe/1.webp" alt="master" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.title}>Тарас Тычинский</h2>
                <h3 className={styles.subTitle}>Тренер по воркауту и бодибилдингу</h3>
                <div className={styles.line} />
                <p className={styles.description}>
                  Профессиональный атлет, успешно совмещающий элементы воркаута с бодибилдингом. Тарас тренируется уже более 12
                  лет, через него прошло более 200 индивидуальных учеников, 80% из которых достигли видимых результатов уже в
                  первые 45 дней.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.item}>
              <div className={styles.info}>
                <h2 className={styles.title}>Алексей Лапин</h2>
                <h3 className={styles.subTitle}>Тренер по силовым направлениям</h3>
                <div className={styles.line} />
                <p className={styles.description}>
                  Алексей является пятикратным чемпионом мира по стритлифтингу а также чемпионом Украины по армрестлингу, жиму
                  лежа и подъему штанги на бицепс. Его опыт поможет тебе кратно увеличить силовые результаты в любом из силовых
                  направлений!
                </p>
              </div>
              <div className={styles.image}>
                <img src="images/whoWe/2.webp" alt="master" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
