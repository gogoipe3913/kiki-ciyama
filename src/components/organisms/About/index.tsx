import React from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const About: React.FC = () => {
  return (
    <div id="About" className={style.About}>
      <FadeInContainer>
        <p className={style.About__text}>
          1994年09月13日生 静岡県出身
          <br />
          グラフィックデザイナー / ウェブエンジニア
          <br />
          <br />
          株式会社PLAID、LINEヤフー株式会社にてデザインエンジニアの経験を経て、2024年にフリーランスとして独立しました。
          ミニマルの中に有機性やポピュラリティを感じられることを大切にし、それを生活に組み込むことを模索しています。
          どこかに人の手を感じるような、暖かさを無機質と混ぜることが得意です。
        </p>
        <p className={style.About__separator}>-</p>
        <p className={style.About__textEnglish}>
          Born on September 13, 1994, in Shizuoka Prefecture in Japan
          <br />
          Graphic Designer / Web Engineer
          <br />
          <br />
          After gaining experience as a design engineer at PLAID Inc. and LINE
          Yahoo Corporation, I became a freelance designer in 2024. I prioritize
          infusing minimalism with organic elements and a sense of popularity,
          always exploring ways to integrate that into everyday life. I excel at
          blending warmth with inorganic aspects, creating a subtle touch of
          human craftsmanship.
        </p>
      </FadeInContainer>
    </div>
  );
};

export default About;
