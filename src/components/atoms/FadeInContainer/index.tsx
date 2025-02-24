import React, { ReactNode, useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.scss";
import classNames from "classnames";

type FadeInContainerProps = {
  children: ReactNode;
};

export const FadeInContainer: React.FC<FadeInContainerProps> = ({
  children,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    rootMargin: "-24%",
    triggerOnce: true,
  });

  useEffect(() => {
    if (containerElement) {
      const img = containerElement.querySelector("img");
      if (img) {
        if (img.complete) {
          setImageLoaded(true);
        } else {
          img.onload = () => setImageLoaded(true);
        }
      } else {
        setImageLoaded(true);
      }
    }
  }, [containerElement]);

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      setContainerElement(node);
      inViewRef(node);
    },
    [inViewRef]
  );

  const enhanceChild = (child: React.ReactElement) => {
    if (child.type === "img") {
      return React.cloneElement(child, {
        onLoad: () => setImageLoaded(true),
      } as React.ImgHTMLAttributes<HTMLImageElement>);
    }
    return child;
  };

  return (
    <div
      ref={setRefs}
      className={classNames(
        styles.FadeInContainer,
        inView && imageLoaded ? styles["FadeInContainer--displayed"] : ""
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? enhanceChild(child) : child
      )}
    </div>
  );
};
