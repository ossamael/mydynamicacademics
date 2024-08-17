import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.h2GetInTouch}>Login</h1>
        <div className={styles.signInTo}>sign in to continue</div>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <div className={styles.formBlockLabel}>EMAIL</div>
            <div className={styles.formTextInput}>
              <input
                className={styles.yourFullName}
                placeholder="Your full name"
                type="text"
              />
            </div>
          </div>
          <div className={styles.inputWrapper1}>
            <div className={styles.formBlockLabelContainer}>
              <p className={styles.password}>PASSWORD</p>
            </div>
            <div className={styles.formTextInput1}>
              <input
                className={styles.mecompanycom}
                placeholder="me@company.com"
                type="text"
              />
            </div>
          </div>
          <button className={styles.formButton}>
            <a className={styles.login}>login</a>
          </button>
        </form>
      </div>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
