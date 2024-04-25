import React from "react";
import styles from "./Results.module.scss";

const beforeAfterRes = [
  { id: 0, photo: "images/results/1.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 1, photo: "images/results/2.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 2, photo: "images/results/3.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 3, photo: "images/results/4.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 4, photo: "images/results/5.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 5, photo: "images/results/6.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 6, photo: "images/results/7.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 7, photo: "images/results/8.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 8, photo: "images/results/9.webp", review: "Отличная программа для занятий! Мне все понравилось." },
  { id: 9, photo: "images/results/10.webp", review: "Отличная программа для занятий! Мне все понравилось." },
];

const Results: React.FC = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section className={styles.results} id="results">
      <div className="container">
        <h2 className="title">Результаты учеников</h2>
        <div className={styles.body}>
          {beforeAfterRes.map((result) => {
            if (result.id < 3 && !showMore) {
              return (
                <div className={styles.column} key={result.id}>
                  <div className={styles.item}>
                    <img src={result.photo} alt="before/after result" />
                    <p className={styles.review}>{result.review}</p>
                  </div>
                </div>
              );
            } else if (showMore) {
              return (
                <div className={styles.column} key={result.id}>
                  <div className={styles.item}>
                    <img src={result.photo} alt="before/after result" />
                    <p className={styles.review}>{result.review}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.showMore}>
          <button onClick={() => setShowMore(!showMore)}>{showMore ? "Скрыть" : "Показать больше"}</button>
        </div>
        <div className={`${styles.billboard} info`}>
          <h2 className={"info-title"}>У нас более 10.000 трансформаций</h2>
        </div>
      </div>
    </section>
  );
};

export default Results;
