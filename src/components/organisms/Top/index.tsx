import React from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";

const Top: React.FC = () => {
  return (
    <div id="Top" className={style.Top}>
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
            onError={(e) => console.error("Video load error", e)}
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
