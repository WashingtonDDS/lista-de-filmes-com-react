import { useState } from "react";
import styles from "./lista.module.css";

export const Lista = (): JSX.Element => {
  const [filmes, setFilmes] = useState<string[]>([
    "Harry Potter",
    "Jogos Vorazes",
    "Senhor dos Aneis",
  ]);
  return (
    <ul className={styles["lista-container"]}>
      {filmes.map((filme) => (
        <li key={filme} className={styles.lista__item}>
          {filme}
        </li>
      ))}
    </ul>
  );
};
