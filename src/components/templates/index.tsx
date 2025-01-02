import React from "react";
import style from "./style.module.scss";
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
