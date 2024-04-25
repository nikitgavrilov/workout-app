import React from "react";
import styles from "./Hero.module.scss";
import Slider from "react-slick";

const Hero: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <section id="hero">
      <div className={"container"}>
        <div className={styles.body}>
          <Slider {...settings}>
            <div>
              <picture>
                <source srcSet="images/hero/change-yourself-mobile.webp" media="(max-width: 580px)" />
                <source srcSet="images/hero/change-yourself-tablet.webp" media="(max-width: 1024px)" />
                <img src="images/hero/change-yourself-pc.webp" alt="change-yourself" />
              </picture>
            </div>
            <div>
              <picture>
                <source srcSet="images/hero/mobile2.webp" media="(max-width: 580px)" />
                <source srcSet="images/hero/tablet2.webp" media="(max-width: 1024px)" />
                <img src="images/hero/pc2.webp" alt="change-yourself" />
              </picture>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
