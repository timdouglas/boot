import { combineReducers, configureStore } from '@reduxjs/toolkit';
import app from '~/logic/slices/app';

const rootReducer = combineReducers({
  app,
  // [someApi.reducerPath]: someApi.reducer,
});

export const createStore = (preloadedState?: any) =>
  configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }), //.concat(someApi.middleware),
    preloadedState,
    reducer: rootReducer,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;

export default store;
