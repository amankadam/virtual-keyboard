import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { QwertyKeyboard } from '../components';
import { useAppDispatch, useAppSelector } from '../store';
import keyBoardSlice from '../store/keyboard';
import { useState } from 'react';
import { alphabets, SPECIAL_KEYS } from '../constants';

export default function Home(): JSX.Element {
  const inputValue = useAppSelector((state) => state.keyboard.inputValue);
  const capsLock = useAppSelector(({ keyboard }) => keyboard.capsLock);
  const dispatch = useAppDispatch();
  const [allkeys, setAllKeys] = useState(alphabets);
  function handlerChange(event: any) {
    dispatch(
      keyBoardSlice.actions.setValueForHandlerChange(event.target.value),
    );
  }
  const onKeyPressed = (e: any): void => {
    const key = e.target.textContent;
    if (
      key.length == 1 &&
      key.charCodeAt(0) >= 97 &&
      key.charCodeAt(0) <= 122
    ) {
      const temp = [...alphabets];
      temp.sort(() => Math.random() - 0.5);
      setAllKeys(temp);
    } else {
      setAllKeys(alphabets);
    }
    if (key == SPECIAL_KEYS.CapsLock) {
      dispatch(keyBoardSlice.actions.setCapsLock());
    }
    if (key.length == 1)
      dispatch(keyBoardSlice.actions.setValue(e.target.textContent));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <textarea
        className={styles.text}
        onChange={handlerChange}
        value={inputValue}
      ></textarea>
      <div className={styles.keyboard}>
        <QwertyKeyboard
          onKeyPressed={onKeyPressed}
          alphabets={allkeys}
          capsLock={capsLock}
        />
      </div>
      {/* <div className={styles.keyboard}>{renderAlphabets()}</div> */}
      {/* <main className={styles.main}>
        <textarea></textarea>
        <div className={styles.keyboard}>{renderAlphabets()}</div>
      </main> */}
    </div>
  );
}
