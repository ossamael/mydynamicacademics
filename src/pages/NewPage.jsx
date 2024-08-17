import Container from "../components/Container";
import styles from "./NewPage.module.css";

const NewPage = () => {
  return (
    <div className={styles.newPage}>
      <footer className={styles.contactForm}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group@2x.png"
        />
        <Container />
      </footer>
    </div>
  );
};

export default NewPage;
