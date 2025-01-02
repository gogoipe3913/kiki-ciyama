import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type IntervalTextProps = {
  className?: string;
};

const IntervalText: React.FC<IntervalTextProps> = ({ className = "" }) => {
  return (
    <div className={classNames(style.IntervalText, className)}>
      <p
        className={classNames(
          style.IntervalText__text,
          style.IntervalText__textBefore
        )}
      >
        <span className={style.IntervalText__textBeforeBody}>
          TAIKI KISHIYAMA PORTFOLIO TAIKI KISHIYAMA PORTFOLIO
        </span>
        <span className={style.IntervalText__textBeforeBody}>
          TAIKI KISHIYAMA PORTFOLIO TAIKI KISHIYAMA PORTFOLIO
        </span>
        <span className={style.IntervalText__textBeforeBody}>
          TAIKI KISHIYAMA PORTFOLIO TAIKI KISHIYAMA PORTFOLIO
        </span>
      </p>
      <p
        className={classNames(
          style.IntervalText__text,
          style.IntervalText__textAfter
        )}
      >
        <span className={style.IntervalText__textAfterBody}>
          GRAPHIC DESIGN + WEB DEVELOPMENT + GRAPHIC DESIGN + WEB DEVELOPMENT +
        </span>
        <span className={style.IntervalText__textAfterBody}>
          GRAPHIC DESIGN + WEB DEVELOPMENT + GRAPHIC DESIGN + WEB DEVELOPMENT
        </span>
        <span className={style.IntervalText__textAfterBody}>
          GRAPHIC DESIGN + WEB DEVELOPMENT + GRAPHIC DESIGN + WEB DEVELOPMENT +
        </span>
      </p>
    </div>
  );
};

export default IntervalText;
