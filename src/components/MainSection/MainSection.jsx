import { useState, useEffect, memo } from "react";

import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList/";

import { GET } from "../../utils/api";

import styles from "./index.module.scss";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({
    topRated: [{}],
    popular: [{}],
    upcomingList: [{}],
  });

  const [filteredTopRated, setFilteredTopRated] = useState([]);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  useEffect(() => {
    setFilteredTopRated(
      movieLists.topRated.filter((movie) => movie.vote_average >= 8.5)
    );
  }, [movieLists.topRated]);

  return (
    <div className={styles.MainSection}>
      <div className={styles.Lists}>
        <>
          <h2 className={styles.text}>
            <span className={styles.span}>top rated movies of the month</span>
          </h2>

          {movieLists.topRated && <TopRatedList cardData={filteredTopRated} />}
        </>
        <>
          <h2 className={styles.text}>
            <span className={styles.span}>coming soon</span>
          </h2>

          {movieLists.upcoming && (
            <UpcomingList cardData={movieLists.upcoming} />
          )}
        </>
      </div>
    </div>
  );
};

export default memo(MainSection);
