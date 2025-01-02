import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideContents } from "./data";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const images = [
  {
    src: "/images/whatIDo/book_30_count.webp",
  },
  {
    src: "/images/whatIDo/coffee_popup.webp",
  },
  {
    src: "/images/whatIDo/coffee_roaster.webp",
  },
  {
    src: "/images/whatIDo/quit_company.webp",
  },
  {
    src: "/images/whatIDo/zine.webp",
  },
  {
    src: "/images/whatIDo/hotel.webp",
  },
  {
    src: "/images/whatIDo/overseas.webp",
  },
  {
    src: "/images/whatIDo/shortbob.webp",
  },
  // ... Add other images here
];

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
  const AUTO_SLIDE_INTERVAL = 8000; // 8000msで自動スライド
  const SET_INTERVAL_SECOND = 10; // 10ms毎にプログレスバーの幅を再計算

  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // 初期値は3
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    initialSlide: 0,
    dots: false,
    autoplay: false, // 自動スライドは無効にする
    focusOnSelect: false,
    speed: 500,
    waitForAnimate: true,
    slidesToShow: slidesToShow,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_, next) => {
      setCurrentSlideNumber(next);
      setProgressBarWidth(0);
    },
    afterChange: (current) => {
      setCurrentSlideNumber(current);
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // 初回レンダリング時に一度だけ呼び出す
    handleResize();

    // 画面サイズの変化を監視する
    window.addEventListener("resize", handleResize);

    return () => {
      // イベントリスナーを削除
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let intervalId: number;

    const startAutoSlide = () => {
      intervalId = window.setInterval(() => {
        const nextSlide = (currentSlideNumber + 1) % images.length;
        sliderRef.current?.slickGoTo(nextSlide);
      }, AUTO_SLIDE_INTERVAL);
    };

    const updateProgressBar = () => {
      setProgressBarWidth((prevWidth) => {
        const remainingWidth = AUTO_SLIDE_INTERVAL - SET_INTERVAL_SECOND;
        return Math.min(prevWidth + SET_INTERVAL_SECOND, remainingWidth);
      });
    };

    const stopAutoSlide = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };

    // 自動スライドを開始する
    startAutoSlide();

    // プログレスバーのアニメーションを開始する
    let progressBarInterval = setInterval(
      updateProgressBar,
      SET_INTERVAL_SECOND
    );

    // スライダーが画面からフォーカスを外れた場合に自動スライドとプログレスバーのアニメーションを停止する
    const handleBlur = () => {
      stopAutoSlide();
      clearInterval(progressBarInterval);
    };

    // スライダーが画面にフォーカスを戻した場合に自動スライドとプログレスバーのアニメーションを再開する
    const handleFocus = () => {
      startAutoSlide();
      progressBarInterval = setInterval(updateProgressBar, SET_INTERVAL_SECOND);
    };

    // イベントリスナーを追加
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      // イベントリスナーを削除
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      clearInterval(progressBarInterval);
      stopAutoSlide();
    };
  }, [currentSlideNumber]);

  return (
    <div id="WhatIDo" className={classNames(style.WhatIDo, className)}>
      <FadeInContainer>
        <p className={style.WhatIDo__title}>
          <span className={style.WhatIDo__titleRow}>+ Hello</span>
          <span className={style.WhatIDo__titleRow}>2023</span>
          <span className={style.WhatIDo__titleRow}>What I do?</span>
        </p>
        <div className={style.WhatIDo__sliderWrapper}>
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className={classNames(
                  style.WhatIDo__sliderContent,
                  currentSlideNumber === index
                    ? style["WhatIDo__sliderContent--current"]
                    : style["WhatIDo__sliderContent--masked"] // 前後のスライドにマスクをかける
                )}
              >
                <img
                  src={img.src}
                  alt="picture"
                  className={style.WhatIDo__sliderContentImage}
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className={style.WhatIDo__currentSlideIndicator}>
          <span className={style.WhatIDo__progressBars}>
            <span className={style.WhatIDo__progressBarBase} />
            <span
              className={style.WhatIDo__progressBarCurrent}
              style={{
                width: `${(progressBarWidth / AUTO_SLIDE_INTERVAL) * 100}%`,
              }}
            />
          </span>
          <span className={style.WhatIDo__numbers}>{`0${
            currentSlideNumber + 1
          } / 0${slideContents.length}`}</span>
        </p>
      </FadeInContainer>
      <FadeInContainer>
        <div className={style.WhatIDo__slideText}>
          <p className={style.WhatIDo__slideTitle}>
            {slideContents[currentSlideNumber].title}
          </p>
          <p className={style.WhatIDo__slideContent}>
            {slideContents[currentSlideNumber].text}
          </p>
        </div>
      </FadeInContainer>
    </div>
  );
};

export default WhatIDo;
