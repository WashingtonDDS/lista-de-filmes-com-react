import { ChangeEvent, FormEvent } from "react";
import { TAlteraProps } from "../../interface/alteraTypes";
import styles from "./altera.module.css";

export function Altera({
  filmeAtual,
  setFilmeAtual,
  filmes,
  setFilmes,
}: TAlteraProps): JSX.Element {
  const alterarNomeFilme = (event: ChangeEvent<HTMLInputElement>) => {
    const novoFilme = {
      id: filmeAtual.id,
      nome: event.target.value,
    };
    setFilmeAtual(novoFilme);
  };

  const alterarFilme = (event: FormEvent) => {
    event.preventDefault();
    const indexDofilmeQueVaiSerAlterado = filmes.findIndex(
      (filme) => filme.id === filmeAtual.id
    );
    if (indexDofilmeQueVaiSerAlterado === -1) return;
    const novosFilmes = [...filmes];
    const novoFilme = {
      ...novosFilmes[indexDofilmeQueVaiSerAlterado],
      nome: filmeAtual.nome,
    };
    novosFilmes[indexDofilmeQueVaiSerAlterado] = novoFilme;
    setFilmes(novosFilmes);
  };
  return (
    <form onSubmit={alterarFilme} className={styles.formulario}>
      <h1 className={styles.form__titulo}>Alterar Filme</h1>
      <input
        value={filmeAtual.nome}
        onChange={alterarNomeFilme}
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
