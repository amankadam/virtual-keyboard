import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import keyBoardSlice from './test';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const makeStore = (): Store =>
  configureStore({
    reducer: {
      [keyBoardSlice.name]: keyBoardSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
export const useAppDispatch = (): any => useDispatch<AppStore>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper<AppStore>(makeStore);
