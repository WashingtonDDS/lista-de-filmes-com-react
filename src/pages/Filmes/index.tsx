import { useState } from "react";
import { Lista } from "../../components/Lista";
import styles from "./filmes.module.css";
import { TFilmesProps } from "../../interface/filmesTypes";
import { Cadastra } from "../../components/Cadastra";

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

  return (
    <section className={styles.filmes}>
      <h1 className={styles.titulo}>Filmes ({filmes.length})</h1>
      <Cadastra setfilmes={setfilmes} />
      {/* <Altera /> */}
      <Lista itens={filmes} setItens={setfilmes} />
    </section>
  );
};
