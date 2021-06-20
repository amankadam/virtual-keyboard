import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { QwertyKeyboard } from '../components';
import { useAppDispatch, useAppSelector } from '../store';
import keyBoardSlice from '../store/keyboard';
import { useState } from 'react';
import { alphabets, SPECIAL_KEYS } from '../constants';

export default function Home(): JSX.Element {
  const { inputValue, capsLock, LShift, RShift } = useAppSelector(
    ({ keyboard }) => keyboard,
  );
  const {
    handleBackspaceKey,
    handleEnterKey,
    handleTabKey,
    handleShiftKey,
    handleSpaceKey,
    setValue,
    setCapsLock,
  } = keyBoardSlice.actions;

  const dispatch = useAppDispatch();
  const [allkeys, setAllKeys] = useState(alphabets);
  function handlerChange(event: any) {
    dispatch(
      keyBoardSlice.actions.setValueForHandlerChange(event.target.value),
    );
  }
  const resetShift = () => {
    if (LShift || RShift) {
      let temp = [...allkeys];
      temp = temp.map((t) => t.toLocaleLowerCase());
      setAllKeys(temp);
    }
  };
  const onKeyPressed = (e: any): void => {
    let key: string = e.target.textContent;
    if (e.target.tagName == 'SPAN') {
      key = e.target.parentElement.textContent;
    }
    if (
      key.length == 1 &&
      key.charCodeAt(0) >= 97 &&
      key.charCodeAt(0) <= 122
    ) {
      console.log(key);
      const temp = [...alphabets];
      temp.sort(() => Math.random() - 0.5);
      setAllKeys(temp);
    }
    switch (key) {
      case SPECIAL_KEYS.CapsLock:
        resetShift();
        dispatch(setCapsLock());
        break;
      case SPECIAL_KEYS.BACKSPACE:
        resetShift();
        dispatch(handleBackspaceKey());
        break;
      case SPECIAL_KEYS.SPACE:
        resetShift();
        dispatch(handleSpaceKey());
        break;
      case SPECIAL_KEYS.TAB:
        resetShift();
        dispatch(handleTabKey());
        break;
      case SPECIAL_KEYS.RETURN:
        resetShift();
        dispatch(handleEnterKey());
        break;
      case SPECIAL_KEYS.LSHIFT:
      case SPECIAL_KEYS.RSHIFT:
        {
          let temp = [...allkeys];
          temp = temp.map((t) => t.toLocaleUpperCase());
          setAllKeys(temp);
          dispatch(handleShiftKey(key));
          if (
            (!RShift && LShift && key == SPECIAL_KEYS.LSHIFT) ||
            (!LShift && RShift && key == SPECIAL_KEYS.RSHIFT)
          ) {
            let temp = [...allkeys];
            temp = temp.map((t) => t.toLocaleLowerCase());
            setAllKeys(temp);
          }
        }
        break;
      default:
        break;
    }
    if (key.length == 1) {
      dispatch(setValue(e.target.textContent));
      if (LShift || RShift) {
        let temp = [...allkeys];
        temp = temp.map((t) => t.toLocaleLowerCase());
        setAllKeys(temp);
      }
    } else if (key.length == 2) {
      dispatch(setValue(LShift || RShift ? key[1] : key[0]));
    }
    console.log(capsLock);
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
          LShift={LShift}
          RShift={RShift}
        />
      </div>
    </div>
  );
}
