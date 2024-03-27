import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section>
      <div className={"container"}>
        <div className={styles.body}>
          <picture>
            <source srcSet="/public/images/change-yourself-mobile.png" media="(max-width: 580px)" />
            <source srcSet="/public/images/change-yourself-tablet.png" media="(max-width: 1024px)" />
            <img src="/public/images/change-yourself.png" alt="change-yourself" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
