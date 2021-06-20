import { SPECIAL_KEYS } from '../constants';
import styles from '../styles/Home.module.scss';
import FirstRow from './firstRow';
import LastRow from './lastRow';

interface IQwerty {
  alphabets: Array<string>;
  capsLock: boolean;
  LShift: boolean;
  RShift: boolean;
}

export function QwertyKeyboard({
  alphabets,
  capsLock,
  LShift,
  RShift,
}: IQwerty): JSX.Element {
  const allKeys: Array<any> = [];
  const renderKeyboard = () => {
    for (const i in alphabets) {
      allKeys.push(
        <div key={alphabets[i]} className={styles.key}>
          {capsLock ? alphabets[i].toLocaleUpperCase() : alphabets[i]}
        </div>,
      );
      if (parseInt(i) == 9) {
        allKeys.push(
          <div key="[" className={styles.keyNum}>
            {'{'}
            <span>[</span>
          </div>,
          <div key="]" className={styles.keyNum}>
            {'}'}
            <span>]</span>
          </div>,
          <div key="\\" className={styles.backslash}>
            |<span>\</span>
          </div>,
          <div
            key={SPECIAL_KEYS.CapsLock}
            className={capsLock ? styles.activeCapsLock : styles.capslock}
          >
            {SPECIAL_KEYS.CapsLock}
          </div>,
        );
      } else if (parseInt(i) == 18) {
        allKeys.push(
          <div key=";" className={styles.keyNum}>
            :<span>;</span>
          </div>,
          <div key="'" className={styles.keyNum}>
            "<span>,</span>
          </div>,
          <div key={SPECIAL_KEYS.RETURN} className={styles.return}>
            {SPECIAL_KEYS.RETURN}
          </div>,
          <div
            key={SPECIAL_KEYS.LSHIFT}
            className={LShift ? styles.activeLeftShift : styles.leftshift}
          >
            {SPECIAL_KEYS.LSHIFT}
          </div>,
        );
      } else if (parseInt(i) == 25) {
        allKeys.push(
          <div key="," className={styles.keyNum}>
            {'<'}
            <span>,</span>
          </div>,
          <div key="." className={styles.keyNum}>
            {'>'}
            <span>.</span>
          </div>,
          <div key="/" className={styles.keyNum}>
            ?<span>/</span>
          </div>,
          <div
            key={SPECIAL_KEYS.RSHIFT}
            className={RShift ? styles.activeRightShift : styles.rightshift}
          >
            {SPECIAL_KEYS.RSHIFT}
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
