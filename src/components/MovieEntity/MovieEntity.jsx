import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";

import styles from "./index.module.scss";

const MovieEntity = ({ movieID }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    console.log(movieID);
    GET("movie", movieID).then((data) => setMovieData(data));
  }, [movieID]);

  const {
    poster_path,
    original_title,
    genres,
    vote_average,
    tagline,
    title,
    release_date,
  } = movieData;

  return (
    <div className={styles.MovieEntity} id="movie-entity">
      <div className={styles.info}>
        <div className={styles.tagline}>
          <h2>" {tagline} "</h2>
        </div>
        <div className={styles.bottom}>
          <p>original title</p>
          <p> "{original_title}" </p>
          <p>genre</p>
          <ul>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <p>rating</p>
          <p>⭐ {vote_average || "not found"}</p>
          
          <p>release date:</p>
          <p>{release_date} </p>
          <p className={styles.title}>
            {title} 
          </p>
        </div>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className={styles.book}>
        <button className={styles.btn}>Book it!</button>
      </div>
      {movieData ? console.log(movieData) : <p>loading...</p>}
    </div>
  );
};

export default MovieEntity;
