import React, { useState } from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
// import Loading from "../../atoms/Loading";
import classNames from "classnames";

const Top: React.FC = () => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // const handleImageLoaded = () => {
  //   console.log("あああ");
  //   // Loadingアニメーションが消えるのを待つ
  //   setTimeout(() => {
  //     setImageLoaded(true);
  //   }, 300);
  // };

  return (
    <div
      id="Top"
      className={classNames(
        style.Top
        // !imageLoaded ? style["Top--beforeLoaded"] : ""
      )}
    >
      {/* <Loading isLoadedFirstImage={imageLoaded} /> */}
      <div className={style.Top__videoWrapper}>
        <p className={style.Top__titleBox}>
          <span className={style.Top__title}>TAIKI KISHIYAMA PORTFOLIO</span>
        </p>
        <div className={style.Top__videoFrame}>
          <video
            playsInline
            muted={true}
            autoPlay={true}
            loop={true}
            src="/video/topVisualVideo.mp4"
            className={style.Top__video}
          />
          <div className={style.Top__titleBoxOnImage}>
            <span className={style.Top__titleOnImage}>
              TAIKI KISHIYAMA PORTFOLIO
            </span>
            <span className={style.Top__titleOnImageSubTitle}>
              Graphic design + Web development
            </span>
          </div>
        </div>
        <ScrollIndicator className={style.Top__scrollIndicator} />
      </div>
    </div>
  );
};

export default Top;
