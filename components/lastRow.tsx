import { SPECIAL_KEYS } from '../constants';
import styles from '../styles/Home.module.scss';

export default function LastRow(): JSX.Element {
  return (
    <>
      <div className={styles.key}>Alt</div>
      <div key={SPECIAL_KEYS.SPACE} className={styles.space}>
        {SPECIAL_KEYS.SPACE}
      </div>
      <div className={styles.key}>Alt</div>
      <div key={SPECIAL_KEYS.CONTROL} className={styles.key}>
        {SPECIAL_KEYS.CONTROL}
      </div>
    </>
  );
}
