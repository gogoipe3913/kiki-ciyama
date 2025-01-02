import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ARTICLE_TYPE, Articles } from "./data";
import classNames from "classnames";
import style from "./style.module.scss";
import Footer from "../Footer";
import { FadeInContainer } from "../../atoms/FadeInContainer";
import ScrollIndicator from "../../atoms/ScrollIndicator";

const PARALLAX_SCROLL_CONSTANT = 0.4;

type ArticleProps = {
  articleType: ARTICLE_TYPE;
  className?: string;
};

const Article: React.FC<ArticleProps> = ({ articleType, className = "" }) => {
  const item = Articles[articleType];
  const [scrollAmount, setScrollAmount] = useState(0);
  const onScroll = () => {
    setScrollAmount(
      Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(style.Article, className)}>
      <div className={style.Article__topContainer}>
        <img
          width="100%"
          height="100%"
          src={item.mainImage.url}
          alt={item.mainImage.alt}
          className={style.Article__mainImage}
          style={{
            transform: `translateY(-${
              scrollAmount * PARALLAX_SCROLL_CONSTANT
            }px)`,
          }}
        />
        <ScrollIndicator className={style.Article__scrollIndicator} />
      </div>
      <Link to="/" className={style.Article__linkToIndex}>
        <span className={style.Article__linkArrowAngle} />
        <span className={style.Article__linkArrow} />
        <span className={style.Article__linkText}>Back to index</span>
      </Link>
      <h1 className={style.Article__titleVertical}>
        <span className={style.Article__titleVerticalBody}>{item.title}</span>
        <span className={style.Article__titleVerticalMonth}>{item.month}</span>
      </h1>

      <div className={style.Article__contentWrapper}>
        <div className={style.Article__content}>
          <div className={style.Article__leftColumn}>
            <FadeInContainer>
              <p className={style.Article__title}>{item.title}</p>
              <p className={style.Article__date}>{item.date}</p>
              <p className={style.Article__text}>{item.text}</p>
            </FadeInContainer>
            <FadeInContainer>
              <p className={style.Article__tag}>
                <span />
                <span className={style.Article__tagBody}>{item.tag}</span>
                <span />
              </p>
            </FadeInContainer>
            <FadeInContainer>
              <p className={style.Article__textEnglish}>{item.textEnglish}</p>
            </FadeInContainer>
          </div>
          <ul className={style.Article__rightColumn}>
            {item.imageFigures.map((imageFigure, index) => (
              <li className={style.Article__imageFigure} key={index}>
                <FadeInContainer>
                  <img
                    width="100%"
                    src={imageFigure.url}
                    alt={imageFigure.alt}
                  />
                </FadeInContainer>
              </li>
            ))}
          </ul>
        </div>
        <Footer className={style.Article__footer} />
      </div>
    </div>
  );
};

export default Article;
