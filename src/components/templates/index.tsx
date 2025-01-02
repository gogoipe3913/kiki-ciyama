import React from "react";
import style from "./style.module.scss";
// import { AnimatePresence } from "framer-motion";
// import { Route, Routes, useLocation } from "react-router-dom";
// import MainLayout from "../organisms/MainLayout";
// import Top from "../organisms/Top";
// import About from "../organisms/About";
// import LookBack from "../organisms/LookBack";
// import IntervalText from "../organisms/IntervalText";
// import Menu from "../organisms/Menu";
// import Footer from "../organisms/Footer";
// import { ARTICLE_TYPE } from "../organisms/Article/data";
// import Article from "../organisms/Article";
// import ScrollTop from "../atoms/ScrollTop";
// import { FadeInContainer } from "../atoms/FadeInContainer";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "../atoms/ScrollTop";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../organisms/MainLayout";
import Menu from "../organisms/Menu";
import Top from "../organisms/Top";
import About from "../organisms/About";
import LookBack from "../organisms/LookBack";
import IntervalText from "../organisms/IntervalText";
import Footer from "../organisms/Footer";

const Templates: React.FC = () => {
  return (
    // <FadeInContainer>
    //   <div className={style.Templates}>
    //     <p>このサイトは準備中です。</p>
    //     <p>"This site is under construction."</p>
    //   </div>
    // </FadeInContainer>
    <>
      <AnimatePresence mode="wait">
        <ScrollTop />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainLayout>
                <div className={style.Templates}>
                  <Menu />
                  <Top />
                  <About />
                  <LookBack />
                  <IntervalText />
                  {/* <WhatIDo /> */}
                  <Footer />
                </div>
              </MainLayout>
            }
          />
          {/* <Route
            path={`/${ARTICLE_TYPE.KYOTO_LIFE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.KYOTO_LIFE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.DESIGN_ENGINEER}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.DESIGN_ENGINEER} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.NEW_LIFE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.NEW_LIFE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.MIDORI}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.MIDORI} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.ACID_COFFEE_TOKYO}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.ACID_COFFEE_TOKYO} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.FIRST_VISITING}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.FIRST_VISITING} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.HISTORICAL_SCIENCE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.HISTORICAL_SCIENCE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.LOOK_BACK_SUMMARY}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.LOOK_BACK_SUMMARY} />
              </MainLayout>
            }
          /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Templates;
