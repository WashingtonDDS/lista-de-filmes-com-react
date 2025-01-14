import { useState } from "react";
import styles from "./lista.module.css";

export const Lista = (): JSX.Element => {
  const [movies, setMoviess] = useState<string[]>([
    "Harry Potter",
    "Jogos Vorazes",
    "Senhor dos Aneis",
  ]);

  const deletarmovies = (filme: string) => {
    const newMovies = movies.filter((item) => item !== filme);
    setMoviess(newMovies);
  };
  return (
    <ul className={styles["lista-container"]}>
      {movies.map((movies) => (
        <li key={movies} className={styles.lista__item}>
          {movies}
          <button onClick={() => deletarmovies(movies)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};
