/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit';
interface Ikey {
  inputValue: string;
}
const keyBoardSlice = createSlice({
  name: 'keyboard',
  initialState: {
    inputValue: '',
    caps: false,
  } as Ikey,
  reducers: {
    setValue(state, action) {
      state.inputValue += action.payload;
    },
    setValueForHandlerChange(state, action) {
      state.inputValue = action.payload;
    },
  },
});
export default keyBoardSlice;
