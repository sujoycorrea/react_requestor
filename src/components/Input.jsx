import styles from "./Input.module.css";

export default function Input({
  theLable,
  theType,
  theValue,
  thePlaceHolder,
  theOnChange,
}) {
  return (
    <div className={styles.inputComp}>
      <div className={styles.label}>{theLable}</div>
      <input
        type={theType}
        value={theValue}
        placeholder={thePlaceHolder}
        onChange={(e) => theOnChange(e.target.value)}
      />
    </div>

    // <div className={styles.inputComp}>
    //   <div className={styles.label}>Email</div>
    //   <input type="text" placeholder="Enter Email" />
    // </div>
  );
}
