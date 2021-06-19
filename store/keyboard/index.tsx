/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit';
interface Ikey {
  inputValue: string;
  capsLock: boolean;
}
const keyBoardSlice = createSlice({
  name: 'keyboard',
  initialState: {
    inputValue: '',
    capsLock: false,
  } as Ikey,
  reducers: {
    setValue(state, action) {
      state.inputValue += action.payload;
    },
    setValueForHandlerChange(state, action) {
      state.inputValue = action.payload;
    },
    setCapsLock(state) {
      state.capsLock = !state.capsLock;
    },
    handleBackspaceKey(state) {
      state.inputValue = state.inputValue.slice(0, -1);
    },
  },
});
export default keyBoardSlice;
