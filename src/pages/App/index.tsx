import { useState } from "react";
import { Lista } from "../../components/Lista";
import styles from "./app.module.css";

function App() {
  const [filmes, setfilmes] = useState<string[]>([
    "Harry Potter",
    "Jogos Vorazes",
    "Senhor dos Aneis",
  ]);

  const addFilme = () => {
    //const novoFilmes = [...filmes, "Divergentes"];
    //setfilmes(novoFilmes);
    setfilmes((filmesAnteriores: string[]) => {
      return [...filmesAnteriores, "Divergentes"];
    });
  };
  return (
    <section className={styles.lista}>
      <h1 className={styles.title}>Filmes ({filmes.length})</h1>
      <Lista items={filmes} setItems={setfilmes} />
      <button onClick={addFilme}>Adicionar Filme</button>
    </section>
  );
}

export default App;
