import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.aboutMain}>
      <header className={styles.aboutHeader}>
        <h1 className={styles.aboutH1Header}>
          SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
        </h1>
        <p className={styles.aboutText}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </header>
      <div className={styles.exploreBtnContainer}>
        <button
          onClick={() => navigate("/destination")}
          className={styles.exploreBtn}
        >
          E X P L O R E
        </button>
      </div>
    </main>
  );
};

export default Home;
