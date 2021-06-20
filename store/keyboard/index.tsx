/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit';
import { SPECIAL_KEYS } from '../../constants';
// interface Ikey {
//   inputValue: string;
//   capsLock: boolean;
//   LShift: boolean;
//   RShift: boolean;
// }
const keyBoardSlice = createSlice({
  name: 'keyboard',
  initialState: {
    inputValue: '',
    capsLock: false,
    LShift: false,
    RShift: false,
  } as any,
  reducers: {
    setShift(state) {
      if (state.LShift || state.RShift) {
        state.LShift = false;
        state.RShift = false;
      }
    },
    setValue(state, action) {
      state.inputValue += action.payload;
      keyBoardSlice.caseReducers.setShift(state);
    },
    setValueForHandlerChange(state, action) {
      state.inputValue = action.payload;
      keyBoardSlice.caseReducers.setShift(state);
    },
    setCapsLock(state) {
      keyBoardSlice.caseReducers.setShift(state);
      state.capsLock = !state.capsLock;
    },
    handleBackspaceKey(state) {
      state.inputValue = state.inputValue.slice(0, -1);
      keyBoardSlice.caseReducers.setShift(state);
    },
    handleSpaceKey(state) {
      state.inputValue += ' ';
      keyBoardSlice.caseReducers.setShift(state);
    },
    handleTabKey(state) {
      state.inputValue += ' ';
      keyBoardSlice.caseReducers.setShift(state);
    },
    handleEnterKey(state) {
      state.inputValue += '\n';
      keyBoardSlice.caseReducers.setShift(state);
    },
    handleShiftKey(state, { payload }) {
      state[payload] = !state[payload];
    },
  },
});
export default keyBoardSlice;
