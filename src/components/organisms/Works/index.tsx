import React, { useEffect, useState } from "react";
import { createClient } from "microcms-js-sdk";
import classNames from "classnames";
import style from "./style.module.scss";
import WorksDrawer from "../WorksDrawer";
import { FadeInContainer } from "../../atoms/FadeInContainer";
import Overlay from "../../atoms/Overlay";

type WorksItemImagesInterface = {
  url: string;
  width: string;
  height: string;
};

export type WorksItemDataInterface = {
  title: string;
  workCategory: string;
  category: string[];
  createDate: string;
  images: WorksItemImagesInterface[];
};

type WorkItemsProps = WorksItemDataInterface & {
  setIsDisplayed(): void;
  setDisplayedItem(): void;
};

const WorkItem: React.FC<WorkItemsProps> = ({
  title,
  workCategory,
  category,
  images,
  setIsDisplayed,
  setDisplayedItem,
}) => {
  // 改行を含めたい処理
  // const categoryName =
  //   category[0] === "Independent production"
  //     ? `Independent\nproduction`
  //     : category[0];
  return (
    <FadeInContainer>
      {/* <li className={style.Works__item} onClick={setIsDisplayed}> */}
      <li className={style.Works__item}>
        <button
          className={style.Works__itemImageWrapper}
          // onClick={setDisplayedItem}
        >
          {images.map((image, index) =>
            index < 2 ? (
              <img
                key={index}
                src={image.url}
                alt={`${title}のサムネイル画像`}
                className={style.Works__itemImage}
                style={{
                  aspectRatio: `${image.width} / ${image.height}`,
                }}
              />
            ) : null
          )}
        </button>
        <div className={style.Works__itemInfo}>
          <p className={style.Works__itemInfoTexts}>
            <span className={style.Works__itemInfoCategory}>{category}</span>
          </p>
          <h3 className={style.Works__itemInfoTitle}>{title}</h3>
          <span className={style.Works__itemInfoId}>{workCategory}</span>
        </div>
      </li>
    </FadeInContainer>
  );
};

const Works: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [displayedItem, setDisplayedItem] = useState<WorksItemDataInterface>({
    title: "-",
    workCategory: "",
    createDate: "-",
    category: ["-"],
    images: [],
    text: "-",
    textEnglish: "-",
  } as WorksItemDataInterface);
  const [worksData, setWorksData] = useState<WorksItemDataInterface[]>([]);

  const serviceDomain = import.meta.env.VITE_SERVICE_DOMAIN;
  const apiKey = import.meta.env.VITE_API_KEY;
  const client = createClient({
    serviceDomain,
    apiKey,
  });

  useEffect(() => {
    client
      .get({
        endpoint: "works",
        queries: { limit: 50 },
      })
      .then((res) => {
        const data = res.contents as WorksItemDataInterface[];
        setWorksData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="works" className={classNames(style.Works)}>
        <h2 className={style.Works__title}>
          <span className={style.Works__titleBody}>Works</span>
        </h2>
        <ul className={style.Works__items}>
          {worksData.map((item, index) => {
            return index % 3 == 0 ? (
              <React.Fragment key={index}>
                <div id={`forResizingByLenis${index / 3}`} />
                <WorkItem
                  key={index}
                  {...item}
                  setIsDisplayed={() => {
                    setIsDisplayed(true);
                  }}
                  setDisplayedItem={() => {
                    setDisplayedItem(item);
                  }}
                />
              </React.Fragment>
            ) : (
              <WorkItem
                key={index}
                {...item}
                setIsDisplayed={() => {
                  setIsDisplayed(true);
                }}
                setDisplayedItem={() => {
                  setDisplayedItem(item);
                }}
              />
            );
          })}
        </ul>
      </div>
      {isDisplayed ? (
        <Overlay
          isDisplayed={isDisplayed}
          closeDrawer={() => {
            setIsDisplayed(false);
          }}
        />
      ) : null}
      <WorksDrawer
        item={displayedItem}
        isDisplayed={isDisplayed}
        setIsDisplayed={() => {
          setIsDisplayed(false);
        }}
      />
    </>
  );
};

export default Works;
