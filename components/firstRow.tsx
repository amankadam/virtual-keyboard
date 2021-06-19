import styles from '../styles/Home.module.scss';
interface IProp {
  onKeyPressed(e: any): void;
}
export default function FirstRow({ onKeyPressed }: IProp): JSX.Element {
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
      <div onClick={onKeyPressed} className={styles.delete}>
        Backspace
      </div>
      <div className={styles.tab}>Tab</div>
    </>
  );
}
