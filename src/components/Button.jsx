import styles from "./Button.module.css";

export default function Button({ children, theOnClick }) {
  return (
    <div className={styles.btn} onClick={(e) => theOnClick(e)}>
      {children}
    </div>
  );
}
