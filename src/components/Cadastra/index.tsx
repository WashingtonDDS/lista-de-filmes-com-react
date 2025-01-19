import styles from "./cadastra.module.css";
export const Cadastra = () => {
  return (
    <form className={styles.formulario}>
      <input
        type="text"
        className={styles.formulario__nomeFilme}
        placeholder="Digite o nome do filme"
      />
      <button className={`botao ${styles.botao__cadastrar}`}>
        Adicionar Filme
      </button>
    </form>
  );
};
