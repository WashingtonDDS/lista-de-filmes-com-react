import { Dispatch, SetStateAction } from "react";
import styles from "./lista.module.css";

type TListaProps = {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
};

export const Lista = ({ items, setItems }: TListaProps): JSX.Element => {
  const deletarFilmes = (filme: string) => {
    const novosFilmes = items.filter((item) => item !== filme);
    setItems(novosFilmes);
  };
  return (
    <ul className={styles["lista-container"]}>
      {items.map((filme) => (
        <li key={filme} className={styles.lista__item}>
          {filme}
          <button onClick={() => deletarFilmes(filme)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};
