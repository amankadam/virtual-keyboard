import { SPECIAL_KEYS } from '../constants';
import styles from '../styles/Home.module.scss';

export default function LastRow(): JSX.Element {
  return (
    <>
      <div key={SPECIAL_KEYS.SPACE} className={styles.space}>
        {SPECIAL_KEYS.SPACE}
      </div>
    </>
  );
}
