import classNames from "classnames";
import React, {
  MutableRefObject,
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
// import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import style from "./style.module.scss";
import { SORT_ITEM_NAME, lookBackItems, lookBackSortItems } from "./data";
import { EXITING, EXITED } from "react-transition-group/Transition";

const ITEM_IMAGE_WIDTH_HALF = 100;
const ITEM_IMAGE_HEIGHT_HALF = 330.5;
const ITEM_IMAGE_HOVER_TRANSLATE_RATIO = 0.05;
const ITEM_IMAGE_HOVER_ROTATE_RATIO_X = -0.03;
const ITEM_IMAGE_HOVER_ROTATE_RATIO_Y = -0.06;

type LookBackProps = {
  className?: string;
};

export type LookBackItemDataProps = {
  title: string;
  month: string;
  slug: string;
  url: string;
  alt: string;
  isLife: boolean;
  isEvent: boolean;
};

type LookBackItemProps = LookBackItemDataProps & {
  refs: MutableRefObject<RefObject<HTMLDivElement>[]>;
  itemIndex: number;
  pointerRef: RefObject<HTMLDivElement>;
  setIsDisplayedNoise(isDisplayedNoise: boolean): void;
};

const LookBackItem: React.FC<LookBackItemProps> = ({
  title,
  month,
  // slug,
  url,
  alt,
  refs,
  itemIndex,
  pointerRef,
  setIsDisplayedNoise,
}) => {
  const [isDisplayedVeil, setIsDisplayedVeil] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const additionalTimeoutSec = 200 * itemIndex;

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 300 + additionalTimeoutSec);

    setTimeout(() => {
      setIsDisplayedVeil(false);
    }, 1400 + additionalTimeoutSec);
  }, []);

  return (
    <li
      className={classNames(
        style.LookBack__item,
        isDisplayed ? "" : style["LookBack__item--inactive"]
      )}
    >
      <div className={style.LookBack__itemContent}>
        <p
          className={classNames(
            style.LookBack__itemTitle,
            isHovered ? style["LookBack__itemTitle--active"] : ""
          )}
        >
          <span className={style.LookBack__itemTitleText}>{title}</span>
          <span className={style.LookBack__itemTitleMonth}>{month}</span>
        </p>
        <div
          ref={refs.current[itemIndex]}
          className={style.LookBack__imageContainer}
        >
          {/* <Link to={`/${slug}`} className={style.LookBack__link}> */}
          <a className={style.LookBack__link}>
            <img
              width={200}
              height={660}
              src={url}
              alt={alt}
              onMouseMove={(event) => {
                if (!isHovered) {
                  setIsHovered(true);
                  setIsDisplayedNoise(true);
                }

                const ref = refs.current[itemIndex];
                // 画像ホバー3Dエフェクト処理
                if (ref && ref.current) {
                  const offsetX = event.nativeEvent.offsetX;
                  const offsetY = event.nativeEvent.offsetY;
                  ref.current.style.transform = `translateX(${
                    (offsetX - ITEM_IMAGE_WIDTH_HALF) *
                    ITEM_IMAGE_HOVER_TRANSLATE_RATIO
                  }px) translateY(${
                    (offsetY - ITEM_IMAGE_HEIGHT_HALF) *
                    ITEM_IMAGE_HOVER_TRANSLATE_RATIO
                  }px) rotateX(${
                    (offsetY - ITEM_IMAGE_HEIGHT_HALF) *
                    ITEM_IMAGE_HOVER_ROTATE_RATIO_X
                  }deg) rotateY(${
                    (offsetX - ITEM_IMAGE_WIDTH_HALF) *
                    ITEM_IMAGE_HOVER_ROTATE_RATIO_Y
                  }deg)`;
                }

                // 背景ノイズポインタ処理
                if (pointerRef && pointerRef.current) {
                  pointerRef.current.style.transform = `translateX(calc(${event.clientX}px - 50%)) translateY(calc(${event.clientY}px - 50%))`;
                }
              }}
              onMouseLeave={() => {
                if (isHovered) {
                  setIsHovered(false);
                  setIsDisplayedNoise(false);
                }

                const ref = refs.current[itemIndex];
                if (ref && ref.current) {
                  ref.current.style.transform = `translateX(0px) translateY(0px)`;
                }
              }}
              className={style.LookBack__itemImage}
            />
          </a>
          {/* </Link> */}
          <div
            className={classNames(
              style.LookBack__colorVeil,
              style[`LookBack__colorVeil--${itemIndex}`],
              isDisplayedVeil ? "" : style["LookBack__colorVeil--fadeOut"]
            )}
          />
        </div>
      </div>
    </li>
  );
};

function getSortedItems(sortName: string): LookBackItemDataProps[] {
  switch (sortName) {
    case SORT_ITEM_NAME.ALL:
      return [...lookBackItems].reverse();
    case SORT_ITEM_NAME.MONTH:
      return lookBackItems;
    case SORT_ITEM_NAME.LIFE:
      return lookBackItems.filter((item) => {
        return item.isLife;
      });
    default:
      return lookBackItems.filter((item) => {
        return item.isEvent;
      });
  }
}

const ANIMATION_CLASS_NAMES = {
  EXITING: style["LookBack__items--exiting"],
  EXITED: style["LookBack__items--exited"],
} as const;

function getModifierClassName(state: string) {
  switch (state) {
    case EXITING:
      return ANIMATION_CLASS_NAMES.EXITING;
    case EXITED:
      return ANIMATION_CLASS_NAMES.EXITED;
    default:
      return;
  }
}

const LookBack: React.FC<LookBackProps> = ({ className = "" }) => {
  const itemRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const pointerRef = useRef<HTMLDivElement>(null);
  const [isDisplayedNoise, setIsDisplayedNoise] = useState(false);
  const [currentSortName, setCurrentSortName] = useState(SORT_ITEM_NAME.ALL);
  const [sortedItems, setSortedItems] = useState<LookBackItemDataProps[]>([]);
  const [isSortDone, setIsSortDone] = useState(true);

  lookBackItems.forEach((_, index) => {
    itemRefs.current[index] = createRef<HTMLDivElement>();
  });

  useEffect(() => {
    setIsSortDone(false);
    // TODO: setTimeout周りを修正する
    setTimeout(() => {
      setSortedItems(getSortedItems(currentSortName));
      setTimeout(() => {
        setIsSortDone(true);
      }, 300);
    }, 300);
  }, [currentSortName]);

  return (
    <>
      <div id="Works" className={classNames(style.LookBack, className)}>
        <div className={style.LookBack__sideColumn}>
          <p className={style.LookBack__sideColumnTitle}>WORKS</p>
          <ul className={style.LookBack__sortItems}>
            {lookBackSortItems.map((sortItem, index) => (
              <li key={index} className={style.LookBack__sortItem}>
                <button
                  className={style.LookBack__sortButton}
                  onClick={() => {
                    setCurrentSortName(sortItem.name);
                  }}
                >
                  {sortItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.LookBack__mainColumn}>
          <CSSTransition
            in={isSortDone}
            timeout={300}
            unmountOnExit
            // react-transition-groupのデフォルトclassNameを出力しないようにする
            classNames={{}}
          >
            {(state) => (
              <ul
                className={classNames(
                  style.LookBack__items,
                  getModifierClassName(state)
                )}
              >
                {sortedItems.map((item, index) => (
                  <LookBackItem
                    key={index}
                    {...item}
                    refs={itemRefs}
                    itemIndex={index}
                    pointerRef={pointerRef}
                    setIsDisplayedNoise={setIsDisplayedNoise}
                  />
                ))}
              </ul>
            )}
          </CSSTransition>
        </div>
      </div>
      <div
        className={classNames(
          style.LookBackNoise,
          isDisplayedNoise ? style["LookBackNoise--displayed"] : ""
        )}
      />
      <div className={style.LookBackBlue}>
        <div ref={pointerRef} className={style.LookBackBlue__body}>
          <div
            className={classNames(
              style.LookBackBlue__round,
              isDisplayedNoise ? style["LookBackBlue__round--displayed"] : ""
            )}
          />
        </div>
      </div>
    </>
  );
};

export default LookBack;
