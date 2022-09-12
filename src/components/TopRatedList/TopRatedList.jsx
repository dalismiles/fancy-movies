import { memo } from "react";
import MainCard from "../MainCard";

import styles from "./index.module.scss";

const TopRatedList = ({ cardData }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.List}>
        {cardData.map((item, index) => (
          <MainCard
            cardData={item}
            cardStyle={{ width: '170px', height: "220px"  }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TopRatedList);
