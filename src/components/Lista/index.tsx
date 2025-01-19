import styles from "./lista.module.css";
import { TListaProps } from "../../interface/listaTypes";

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
