import { memo } from "react";
import MainCard from "../MainCard";

import styles from "./index.module.scss";

const UpcomingList = ({ cardData }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.List}>
        {cardData.map((item, index) => (
          <MainCard
            cardData={item}
            cardStyle={{ width: "200px", height: "310px", fontSize: "16px" }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(UpcomingList);
