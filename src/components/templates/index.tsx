import React from "react";
import style from "./style.module.scss";
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
    <div className={style.Templates}>
      <Menu />
      <Top />
      <About />
      <LookBack />
      <IntervalText />
      <Footer />
    </div>
  );
};

export default Templates;
