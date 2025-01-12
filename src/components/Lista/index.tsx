import styles from "./lista.module.css";

export const Lista = (): JSX.Element => {
  return (
    <ul className={styles["lista-container"]}>
      <li className={styles.lista__item}>Harry Potter</li>
      <li className={styles.lista__item}>Jogos Vorazes</li>
    </ul>
  );
};
