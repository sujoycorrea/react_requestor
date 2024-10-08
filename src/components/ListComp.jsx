import styles from "./ListComp.module.css";

export default function ListComp({
  theTitle,
  theLabel1,
  theContent1,
  theLabel2,
  theContent2,
  theLable3,
  theContent3,
  theOnClick,
  theId,
  thekey,
}) {
  return (
    <div
      className={styles.listBox}
      onClick={() => theOnClick(theId)}
      key={thekey}
    >
      <div className={styles.boxTitle}>{theTitle}</div>

      <div className={styles.boxDetails}>
        <div className={styles.detail}>
          <div className={styles.label}>{theLabel1}</div>
          <div className={styles.content}>{theContent1}</div>
        </div>

        <div className={styles.detail}>
          <div className={styles.label}>{theLabel2}</div>
          <div className={styles.content}>{theContent2}</div>
        </div>

        <div className={styles.detail}>
          <div className={styles.label}>{theLable3}</div>
          <div className={styles.content}>{theContent3}</div>
        </div>
      </div>
    </div>
  );
}
