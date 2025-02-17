import { useState } from "react";
import { Lista } from "../../components/Lista";
import styles from "./filmes.module.css";
import { TFilmesProps } from "../../interface/filmesTypes";
import { Cadastra } from "../../components/Cadastra";
import { Altera } from "../../components/Altera";

export const Filmes = () => {
  const [modalAlterar, setModalAterar] = useState<boolean>(false);

  const [filmeAtual, setFilmeAtual] = useState<TFilmesProps>({
    id: "",
    nome: "",
  });
  const [filmes, setFilmes] = useState<TFilmesProps[]>([
    {
      id: "1",
      nome: "Harry Potter",
    },
    {
      id: "2",
      nome: "Jogos Vorazes",
    },
  ]);

  const lidarComOAlterar = (filme: TFilmesProps) => {
    setFilmeAtual(filme);
    setModalAterar(true);
  };

  return (
    <section className={styles.filmes}>
      <h1 className={styles.titulo}>Filmes ({filmes.length})</h1>
      <Cadastra setFilmes={setFilmes} />
      <Altera
        modalAlterar={modalAlterar}
        setModalAterar={setModalAterar}
        filmeAtual={filmeAtual}
        setFilmeAtual={setFilmeAtual}
        filmes={filmes}
        setFilmes={setFilmes}
      />
      <Lista
        lidarComOAlterar={lidarComOAlterar}
        itens={filmes}
        setItens={setFilmes}
      />
    </section>
  );
};
