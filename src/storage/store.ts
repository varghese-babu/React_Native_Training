import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';
import { api } from '@services/api/api';

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
});
