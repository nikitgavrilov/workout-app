import React from "react";
import styles from "./Programs.module.scss";

const CARDS = [
  {
    id: 0,
    title: "WorkoutAthlete",
    subtitle: "Тренировки по воркауту",
    price: 13,
    description: "Здесь ты найдешь тренировки со своим весом",
    image: "images/programs/bg-1.webp",
  },
  {
    id: 1,
    title: "StreetLiftingAthlete",
    subtitle: "Тренировки с весом на турниках и брусьях",
    price: 18,
    description: "Тренируйся с дополнительным весом вместе с чемпионом мира",
    image: "images/programs/bg-2.webp",
  },
  {
    id: 2,
    title: "Мужской марафон",
    subtitle: "Тренировки в тренажерном зале",
    price: 40,
    description: "Построй идеальное телосложение вместе с тренером за 45 дней",
    image: "images/programs/bg-3.webp",
  },
];

const Programs: React.FC = () => {
  return (
    <section className={styles.programs}>
      <div className={"container"}>
        <div className={"info"}>
          <h2 className={"info-title"}>Нас уже 20.000 базовчан! Присоединяйся!</h2>
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>Основные программы</h2>
          <div className={styles.cards}>
            {CARDS.map((card) => (
              <div className={styles.card} style={{ background: `url(${card.image}) 0 0/100% no-repeat` }}>
                <img src="images/icons/arrow-right.svg" alt="arrow" className={styles.arrow} />
                <h3 className={"card__title"} style={{ marginBottom: 5 }}>
                  {card.title}
                </h3>
                <h4 className={styles.cardSubTitle}>{card.subtitle}</h4>
                <p className={"card__price"} style={{ marginBottom: 20 }}>
                  {card.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </p>
                <p className={"card__description"}>{card.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.individual} style={{ background: "url(images/programs/individual.webp) right 0 no-repeat" }}>
            <div className={styles.individualInfo}>
              <h3 className={"card__title"} style={{ marginBottom: 20 }}>
                Индивидуальный подход
              </h3>
              <p className={"card__description"}>
                Получи максимальный пакет и тренируйся вместе с нами без ограничений. Ты получишь VIP доступы ко всем тренировкам,
                чатам и общению со всей командой и 100% ганатию результата!
              </p>
            </div>
            <div className={styles.individualPrice}>
              <p className={styles.individualYear}>доступ: 1 год</p>
              <p className={"card__price"}>{(400).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
