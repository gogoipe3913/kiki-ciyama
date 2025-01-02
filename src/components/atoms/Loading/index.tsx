import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import LogoMain from "../../atoms/LogoMain";
import classNames from "classnames";

type LoadingProps = {
  isLoadedFirstImage: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoadedFirstImage }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (isLoadedFirstImage) {
      setTimeout(() => {
        setIsDisplayed(false);
      }, 1000);
    }
  }, [isLoadedFirstImage]);

  return isDisplayed ? (
    <div
      className={classNames(
        style.Loading,
        isLoadedFirstImage ? style["Loading--end"] : ""
      )}
    >
      <div className={style.Loading__logo}>
        <LogoMain />
      </div>
    </div>
  ) : null;
};

export default Loading;
