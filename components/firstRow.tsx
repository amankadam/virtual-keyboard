import styles from '../styles/Home.module.scss';
export default function FirstRow(): JSX.Element {
  return (
    <>
      <div className={styles.key}>~</div>
      <div className={styles.keyNum}>
        1<span>!</span>
      </div>
      <div className={styles.keyNum}>
        2<span>@</span>
      </div>
      <div className={styles.keyNum}>
        3<span>#</span>
      </div>
      <div className={styles.keyNum}>
        4<span>$</span>
      </div>
      <div className={styles.keyNum}>
        5<span>%</span>
      </div>
      <div className={styles.keyNum}>
        6<span>^</span>
      </div>
      <div className={styles.keyNum}>
        7<span>&</span>
      </div>
      <div className={styles.keyNum}>
        8<span>*</span>
      </div>
      <div className={styles.keyNum}>
        9<span>(</span>
      </div>
      <div className={styles.keyNum}>
        0<span>)</span>
      </div>
      <div className={styles.key}>-</div>
      <div className={styles.key}>+</div>
      <div className={styles.delete}>Backspace</div>
      <div className={styles.tab}>Tab</div>
    </>
  );
}
