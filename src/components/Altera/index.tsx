import { TAlteraProps } from "../../interface/alteraTypes";
import styles from "./altera.module.css";

export function Altera({ filmeAtual }: TAlteraProps): JSX.Element {
  return (
    <form className={styles.formulario}>
      <h1 className={styles.form__titulo}>Alterar Filme</h1>
      <input
        value={filmeAtual.nome}
        placeholder="Digite o nome do filme"
        className={styles.formulario__nomeFilme}
      />
      <button className={`botao ${styles.botao__alterar}`}>
        Alterar Filme
      </button>
      <button type="button" className={`botao ${styles.botao__fechar}`}>
        Fechar
      </button>
    </form>
  );
}
