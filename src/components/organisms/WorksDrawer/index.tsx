import React, { useEffect } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { WorksItemDataInterface } from "../Works";
import LinkButton from "../../atoms/LinkButton";

type WorksDrawerContentsProps = Omit<WorksItemDataInterface, "id">;

type WorksDrawerProps = {
  item: WorksDrawerContentsProps;
  isDisplayed: boolean;
  setIsDisplayed(): void;
};

const formatDateString = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const WorksDrawerContents: React.FC<WorksDrawerContentsProps> = ({
  title,
  createDate,
  category,
  images,
  text,
  textEnglish,
}) => {
  const formattedCreateDate = formatDateString(createDate);
  return (
    <div
      onWheel={(event) => {
        event.stopPropagation();
      }}
      className={style.WorksDrawer__contents}
    >
      <h3 className={style.WorksDrawer__title}>{title}</h3>
      <div className={style.WorksDrawer__separator} />
      <p className={style.WorksDrawer__createDate}>{formattedCreateDate}</p>
      <p className={style.WorksDrawer__category}>{category}</p>
      <div className={style.WorksDrawer__separator} />
      <div className={style.WorksDrawer__body}>
        <div className={style.WorksDrawer__texts}>
          <p className={style.WorksDrawer__text}>{text}</p>
          <LinkButton
            href={"https://kfigallery.base.shop/"}
            text="View web shop"
            className={style.WorksDrawer__link}
          />
          <p className={style.WorksDrawer__textEnglish}>{textEnglish}</p>
        </div>
        <div className={style.WorksDrawer__images}>
          {images.length !== 0 &&
            images.map((image, index) => (
              <img key={index} src={image.url} alt="" loading="lazy" />
            ))}
        </div>
      </div>
    </div>
  );
};

const WorksDrawer: React.FC<WorksDrawerProps> = ({
  item,
  isDisplayed = false,
  setIsDisplayed = () => {},
}) => {
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
      <div
        id="WorksDrawer"
        className={classNames(
          style.WorksDrawer,
          isDisplayed ? style["WorksDrawer--displayed"] : ""
        )}
      >
        <WorksDrawerContents {...item} />
      </div>
      <button
        onClick={setIsDisplayed}
        className={classNames(
          style.WorksDrawerCloseButton,
          isDisplayed ? style["WorksDrawerCloseButton--displayed"] : ""
        )}
      >
        <span className={style.WorksDrawerCloseButton__line} />
      </button>
    </>
  );
};

export default WorksDrawer;
