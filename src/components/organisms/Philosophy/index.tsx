import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";
import PhilosophyDrawer from "../PhilosophyDrawer";
import Overlay from "../../atoms/Overlay";

const Philosophy: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (isDisplayed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDisplayed]);
  return (
    <>
      <div id="about" className={style.Philosophy}>
        <div className={style.Philosophy__contents}>
          <FadeInContainer>
            <h2 className={style.Philosophy__title}>
              <span className={style.Philosophy__titleBody}>About</span>
            </h2>
          </FadeInContainer>
          <FadeInContainer>
            <div className={style.Philosophy__texts}>
              <p className={style.Philosophy__text}>
                岸山泰輝
                <br />
                <br />
                LINEヤフー株式会社、その他制作会社等の複数社でグラフィックやウェブの業務経験を経て2024年にフリーランスとして独立しました。グラフィック、撮影、ウェブデザインから構築まで、多様な依頼にお応えすることができます。ミニマルと共に、有機性や親しみやすさを感じられることを大切にデザインをしています。
              </p>
              <p className={style.Philosophy__textEnglish}>
                Taiki Kishiyama
                <br />
                <br />
                After gaining experience in graphic and web design at LINE Yahoo
                Corporation and several other production companies, I became a
                freelance designer in 2024. I handle a wide range of requests,
                from graphic design and photography to web design and
                development. My design approach values minimalism while
                incorporating organic elements and a sense of warmth.
              </p>
            </div>
            {/* <div className={style.Philosophy__buttonWrapper}>
              <button
                className={style.Philosophy__button}
                onClick={() => {
                  setIsDisplayed(!isDisplayed);
                }}
              >
                <span className={style.Philosophy__buttonText}>View More</span>
                <span className={style.Philosophy__buttonCircle}>
                  <span className={style.Philosophy__buttonArrow} />
                </span>
              </button>
            </div> */}
          </FadeInContainer>
        </div>
      </div>
      {isDisplayed ? (
        <Overlay
          isDisplayed={isDisplayed}
          closeDrawer={() => {
            setIsDisplayed(false);
          }}
        />
      ) : null}
      <PhilosophyDrawer
        isDisplayed={isDisplayed}
        setIsDisplayed={() => {
          setIsDisplayed(false);
        }}
      />
    </>
  );
};

export default Philosophy;
