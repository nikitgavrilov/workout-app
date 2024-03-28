import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section>
      <div className={"container"}>
        <div className={styles.body}>
          <picture>
            <source srcSet="images/hero/change-yourself-mobile.webp" media="(max-width: 580px)" />
            <source srcSet="images/hero/change-yourself-tablet.webp" media="(max-width: 1024px)" />
            <img src="images/hero/change-yourself-pc.webp" alt="change-yourself" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
