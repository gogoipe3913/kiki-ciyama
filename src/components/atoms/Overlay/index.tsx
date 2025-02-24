import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type OverlayProps = {
  isDisplayed: boolean;
  closeDrawer?(): void;
};

const Overlay: React.FC<OverlayProps> = ({
  isDisplayed = false,
  closeDrawer = () => {},
}) => {
  return (
    <button
      className={classNames(
        style.Overlay,
        isDisplayed ? style["Overlay--displayed"] : ""
      )}
      onClick={closeDrawer}
    />
  );
};

export default Overlay;
