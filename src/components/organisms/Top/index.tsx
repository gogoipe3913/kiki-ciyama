import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
import { FadeInContainer } from "../../atoms/FadeInContainer";

type TopProps = {
  isLoaded: boolean;
  onLoadData?(): void;
  className?: string;
};

const Top: React.FC<TopProps> = ({
  isLoaded,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLoadData = () => {},
  className = "",
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isDisplayedVideo, setIsDisplayedVideo] = useState(false);
  const [isDisplayedExplore, setIsDisplayedExplore] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsDisplayed(true);
        // new Vivus(
        //   "kfisvg",
        //   {
        //     type: "sync", // アニメーションタイプ (delayed, sync, oneByOne など)
        //     duration: 121, // アニメーションの長さ
        //     animTimingFunction: Vivus.EASE, // イージング
        //   },
        //   () => {
        //     setIsDisplayedVideo(true);
        //   }
        // );
        setIsDisplayedVideo(true);
      }, 1000);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isDisplayedVideo) {
      // 映像が1秒かけてフェードインするので、それを待つ
      setTimeout(() => {
        setIsDisplayedExplore(true);
      }, 800);
    }
  }, [isDisplayedVideo]);

  return (
    <FadeInContainer>
      <div
        id="Top"
        className={classNames(
          style.Top,
          isDisplayed ? style["Top--displayed"] : "",
          className
        )}
      >
        <div className={style.Top__videoWrapper}>
          <div className={style.Top__videoFrame}>
            <video
              playsInline
              muted={true}
              autoPlay={true}
              loop={true}
              src="/video/topVisualVideo.mp4"
              onLoadedData={() => {
                setTimeout(() => {
                  onLoadData();
                  // デフォルトで1秒はローディングする
                }, 1000);
              }}
              className={classNames(
                style.Top__video,
                isDisplayedVideo ? style["Top__video--displayed"] : ""
              )}
            />
          </div>
        </div>
        <ScrollIndicator
          className={classNames(
            style.Top__scrollIndicator,
            isDisplayedExplore ? style["Top__scrollIndicator--displayed"] : ""
          )}
        />
      </div>
    </FadeInContainer>
  );
};

export default Top;
