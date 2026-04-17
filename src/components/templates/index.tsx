import React from "react";
import style from "./style.module.scss";
import Works from "../organisms/Works";
import SideColumn from "../organisms/SideColumn";

const Templates: React.FC = () => {
  // ファーストビューのステータス
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* <Loading isLoadedFirstImage={isLoaded} /> */}
      <div className={style.Templates}>
        <SideColumn isLoaded={true} className={style.Templates__sideColumn} />
        <div className={style.Templates__mainColumn}>
          {/* <Top
            isLoaded={isLoaded}
            onLoadData={() => {
              setIsLoaded(true);
            }}
            className={style.Templates__top}
          />
          <Philosophy /> */}
          <Works />
        </div>
      </div>
    </>
  );
};

export default Templates;
