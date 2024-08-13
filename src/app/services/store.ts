import { configureStore } from '@reduxjs/toolkit';
import { api } from './baseApi';
import appReducer from './slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/** Redux store */

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
