import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import style from "./style.module.scss";
import classNames from "classnames";
import { ENTERED, EXITED } from "react-transition-group/Transition";

const ANIMATION_CLASS_NAMES = {
  ENTERED: style["Menu__contentsListWrapper--entered"],
  EXITED: style["Menu__contentsListWrapper--exited"],
} as const;

function getModifierClassName(state: string) {
  switch (state) {
    case ENTERED:
      return ANIMATION_CLASS_NAMES.ENTERED;
    case EXITED:
      return ANIMATION_CLASS_NAMES.EXITED;
    default:
      return;
  }
}

type MenuProps = {
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ className = "" }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classNames(style.Menu, className)}>
      <button
        className={style.Menu__hamburgerButton}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--top--rotated"]
              : style["Menu__hamburgerButtonLine--top"]
          )}
        />
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--center--disappered"]
              : style["Menu__hamburgerButtonLine--center"]
          )}
        />
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--bottom--rotated"]
              : style["Menu__hamburgerButtonLine--bottom"]
          )}
        />
      </button>
      <div
        className={classNames(
          style.Menu__contents,
          isOpened ? style["Menu__contents--displayed"] : ""
        )}
      >
        <CSSTransition
          in={isOpened}
          timeout={400}
          unmountOnExit
          // react-transition-groupのデフォルトclassNameを出力しないようにする
          classNames={{}}
        >
          {(state) => (
            <div
              className={classNames(
                style.Menu__contentsListWrapper,
                getModifierClassName(state)
              )}
            >
              <ul className={style.Menu__contentsList}>
                <li className={style.Menu__contentsItem}>
                  <a
                    href="#Top"
                    className={style.Menu__contentsItemLink}
                    onClick={() => {
                      setIsOpened(false);
                    }}
                  >
                    Top
                  </a>
                </li>
                <li className={style.Menu__contentsItem}>
                  <a
                    href="#About"
                    className={style.Menu__contentsItemLink}
                    onClick={() => {
                      setIsOpened(false);
                    }}
                  >
                    About
                  </a>
                </li>
                <li className={style.Menu__contentsItem}>
                  <a
                    href="#Works"
                    className={style.Menu__contentsItemLink}
                    onClick={() => {
                      setIsOpened(false);
                    }}
                  >
                    Works
                  </a>
                </li>
              </ul>
              <a
                href="mailto:taiki.kishiyama0913@gmail.com"
                className={style.Menu__contact}
              >
                <span className={style.Menu__contactTitle}>Contact :</span>
                <span className={style.Menu__contactMail}>
                  taiki.kishiyama@gmail.com
                </span>
              </a>
            </div>
          )}
        </CSSTransition>
      </div>
    </div>
  );
};

export default Menu;
