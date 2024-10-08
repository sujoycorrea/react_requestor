import styles from "./DetailsComp.module.css";

export default function DetailsComp({ theTitle, theEmail, theDescription }) {
  return (
    <div className={styles.bigBox}>
      <div className={styles.boxTitle}>{theTitle}</div>

      <div className={styles.boxDetails}>
        <div className={styles.detail}>
          <div className={styles.label}>Email:</div>
          <dic className={styles.content}>{theEmail}</dic>
        </div>

        <div className={styles.detail}>
          <div className={styles.label}>Description</div>
          <dic className={styles.content}>{theDescription}</dic>
        </div>

        {/* <div className={styles.detail}>
          <div className={styles.label}>{theLable3}</div>
          <dic className={styles.content}>{theContent3}</dic>
        </div> */}
      </div>
    </div>
  );
}
