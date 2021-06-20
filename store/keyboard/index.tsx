/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit';
const keyBoardSlice = createSlice({
  name: 'keyboard',
  initialState: {
    inputValue: '',
    capsLock: false,
    LShift: false,
    RShift: false,
    selectedTextStart: 0,
    selectedTextEnd: 0,
  } as any,
  reducers: {
    setShift(state) {
      if (state.LShift || state.RShift) {
        state.LShift = false;
        state.RShift = false;
      }
    },
    setSelectedRange(state, { payload }) {
      state.selectedTextStart = payload.start;
      state.selectedTextEnd = payload.end;
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
      const { selectedTextStart, selectedTextEnd, inputValue } = state;
      if (selectedTextStart == selectedTextEnd) {
        state.inputValue = inputValue.slice(0, -1);
      } else {
        state.inputValue =
          inputValue.slice(0, selectedTextStart) +
          inputValue.slice(selectedTextEnd, inputValue.length);
        keyBoardSlice.caseReducers.setShift(state);
      }
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
