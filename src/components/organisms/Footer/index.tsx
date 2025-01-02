import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className = "" }) => (
  <p className={classNames(style.Footer, className)}>
    <span>© ️Taiki Kishiyama 2023</span>
  </p>
);

export default Footer;
