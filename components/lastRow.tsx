import styles from '../styles/Home.module.scss';

export default function LastRow(): JSX.Element {
  return (
    <>
      <div className={styles.key}>Alt</div>
      <div className={styles.space}>Space</div>
      <div className={styles.key}>Alt</div>
      <div className={styles.key}>Ctrl</div>
      <div className={styles.key}>Fn</div>
    </>
  );
}
