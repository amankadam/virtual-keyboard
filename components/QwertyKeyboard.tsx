import styles from '../styles/Home.module.scss';
import FirstRow from './firstRow';
import LastRow from './lastRow';

interface IQwerty {
  onKeyPressed(e: any): void;
  alphabets: Array<string>;
}

export function QwertyKeyboard({
  onKeyPressed,
  alphabets,
}: IQwerty): JSX.Element {
  const allKeys: Array<HTMLElement> = [];
  const renderKeyboard = () => {
    for (const i in alphabets) {
      allKeys.push(
        <div key={alphabets[i]} className={styles.key} onClick={onKeyPressed}>
          {alphabets[i]}
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
            key="CapsLock"
            className={styles.capslock}
            onClick={onKeyPressed}
          >
            CapsLock
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
          <div key="Return" className={styles.return}>
            Return
          </div>,
          <div key="LShift" className={styles.leftshift}>
            Shift
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
          <div key="RShift" className={styles.rightshift}>
            Shift
          </div>,
          <div key="Ctrl" className={styles.leftctrl}>
            Ctrl
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
