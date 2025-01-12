import { Lista } from "../../components/Lista";
import styles from "./app.module.css";

function App() {
  return (
    <section className={styles.lista}>
      <h1 className={styles.title}>Filmes</h1>
      <Lista />
    </section>
  );
}

export default App;
