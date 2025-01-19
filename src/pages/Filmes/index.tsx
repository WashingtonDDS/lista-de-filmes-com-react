import { useState } from "react";
import { Lista } from "../../components/Lista";
import styles from "./app.module.css";
import { TFilmesProps } from "../../interface/filmesTypes";

export const Filmes = () => {
  const [filmes, setfilmes] = useState<TFilmesProps[]>([
    {
      id: "1",
      nome: "Harry Potter",
    },
    {
      id: "2",
      nome: "Jogos Vorazes",
    },
  ]);

  const addFilme = () => {
    //const novoFilmes = [...filmes, "Divergentes"];
    //setfilmes(novoFilmes);
    setfilmes((filmesAnteriores: string[]) => {
      return [...filmesAnteriores, "Divergentes"];
    });
  };

  return (
    <section className={styles.filmes}>
      <h1 className={styles.titulo}>Filmes ({filmes.length})</h1>
      <Cadastra />
      <Altera />
      <Lista items={filmes} setItems={setfilmes} />
    </section>
  );
};
