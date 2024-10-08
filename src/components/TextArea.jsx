import styles from "./TextArea.module.css";

export default function TextArea({ theLabel, theOnChange, theValue }) {
  return (
    <div className={styles.textAreaComp}>
      <div className={styles.label}>{theLabel}</div>
      <textarea
        rows={15}
        cols={70}
        value={theValue}
        onChange={(e) => theOnChange(e.target.value)}
      />
    </div>
  );
}
