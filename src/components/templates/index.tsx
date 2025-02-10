import React from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../atoms/FadeInContainer";

const Templates: React.FC = () => {
  return (
    <FadeInContainer>
      <div className={style.Templates}>
        <p>このサイトは準備中です</p>
        <p>"This site is under construction."</p>
      </div>
    </FadeInContainer>
  );
};

export default Templates;
