import { SPECIAL_KEYS } from '../constants';
import styles from '../styles/Home.module.scss';
interface IProp {
  onKeyPressed(e: any): void;
}
export default function LastRow({ onKeyPressed }: IProp): JSX.Element {
  return (
    <>
      <div
        key={SPECIAL_KEYS.SPACE}
        onClick={onKeyPressed}
        className={styles.space}
      >
        {SPECIAL_KEYS.SPACE}
      </div>
    </>
  );
}
