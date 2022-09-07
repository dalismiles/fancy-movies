import { useState, useEffect, memo } from "react";

import MainCard from "../MainCard";
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
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
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
      <div className={styles.Card}>
        <p className={styles.text}>top rated movie </p>
        {movieLists.popular && (
          <MainCard
            cardData={movieLists.popular[0]}
            className={styles.maincard}
          />
        )}
      </div>
      <div className={styles.Lists}>
        <p className={styles.text}>top rated movies of the month</p>
        {movieLists.topRated && (
          <TopRatedList
            cardData={filteredTopRated}
            nCards={8}
            className={styles.topRated}
          />
        )}
        <p className="MainSection__text">upcoming movies</p>
        {movieLists.upcoming && (
          <UpcomingList
            cardData={movieLists.upcoming}
            nCards={10}
            className={styles.upcoming}
          />
        )}
      </div>
    </div>
  );
};

export default memo(MainSection);
