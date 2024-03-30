import React from "react";
import styles from "./Welcome.module.scss";

const Welcome: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className={"container"}>
        <h2 className={"title"}>Добро пожаловать в комьюнити</h2>
        <div className={styles.body}>
          <div className={styles.video}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CT20g_BulwQ?si=KPJLDIot-of3KEEk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
