import { SPECIAL_KEYS } from '../constants';
import styles from '../styles/Home.module.scss';
import FirstRow from './firstRow';
import LastRow from './lastRow';

interface IQwerty {
  onKeyPressed(e: any): void;
  alphabets: Array<string>;
  capsLock: boolean;
}

export function QwertyKeyboard({
  onKeyPressed,
  alphabets,
  capsLock,
}: IQwerty): JSX.Element {
  const allKeys: Array<HTMLElement> = [];
  const renderKeyboard = () => {
    for (const i in alphabets) {
      allKeys.push(
        <div key={alphabets[i]} className={styles.key} onClick={onKeyPressed}>
          {capsLock ? alphabets[i].toLocaleUpperCase() : alphabets[i]}
        </div>,
      );
      if (parseInt(i) == 9) {
        allKeys.push(
          <div key="[" className={styles.key} onClick={onKeyPressed}>
            [
          </div>,
          <div key="]" className={styles.key} onClick={onKeyPressed}>
            ]
          </div>,
          <div key="\\" className={styles.backslash} onClick={onKeyPressed}>
            \
          </div>,
          <div
            key={SPECIAL_KEYS.CapsLock}
            className={capsLock ? styles.activeCapsLock : styles.capslock}
            onClick={onKeyPressed}
          >
            {SPECIAL_KEYS.CapsLock}
          </div>,
        );
      } else if (parseInt(i) == 18) {
        allKeys.push(
          <div key=";" className={styles.key} onClick={onKeyPressed}>
            ;
          </div>,
          <div key="'" className={styles.key} onClick={onKeyPressed}>
            '
          </div>,
          <div key={SPECIAL_KEYS.RETURN} className={styles.return}>
            {SPECIAL_KEYS.RETURN}
          </div>,
          <div key={SPECIAL_KEYS.LSHIFT} className={styles.leftshift}>
            {SPECIAL_KEYS.LSHIFT}
          </div>,
        );
      } else if (parseInt(i) == 25) {
        allKeys.push(
          <div key="," className={styles.key} onClick={onKeyPressed}>
            ,
          </div>,
          <div key="." className={styles.key} onClick={onKeyPressed}>
            .
          </div>,
          <div key="/" className={styles.key} onClick={onKeyPressed}>
            /
          </div>,
          <div key={SPECIAL_KEYS.RSHIFT} className={styles.rightshift}>
            {SPECIAL_KEYS.RSHIFT}
          </div>,
          <div key={SPECIAL_KEYS.CONTROL} className={styles.leftctrl}>
            {SPECIAL_KEYS.CONTROL}
          </div>,
        );
      }
    }
    return allKeys;
  };
  return (
    <>
      <FirstRow />
      {renderKeyboard()}
      <LastRow />
    </>
  );
}
