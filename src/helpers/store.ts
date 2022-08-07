import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import thunk from 'redux-thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createWhitelistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import { ICombinedReducers } from "./types";

// FIXME: flipper config to fix
const middlewares = getDefaultMiddleware({
  serializableCheck: false,
  // FIXME: Ask about this in 2XG ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

// FIXME: flipper config to fix
// if (__DEV__) {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }
export interface StateModel {
  credentials: any;
  tokens: any;
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  transforms: [createWhitelistFilter("auth", ["tokens"])],
};

// const sliceSample = createSlice({
//   name: "slice-sample",
//   initialState: {},
//   reducers: {
//     auth(state) {
//       state.tokens++;
//     },
//   },
// });

export const reduxInit = (reducers: ICombinedReducers) => {
  const rootReducer = combineReducers(reducers);
  const clearStore = () => AsyncStorage.removeItem("persist:root");
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: middlewares,
  });

  interface IReduxTypes {
    AppDispatch: typeof store.dispatch;
    RootState: ReturnType<typeof store.getState>;
  }

  const useAppDispatch = () => useDispatch<IReduxTypes["AppDispatch"]>(); // Export a hook that can be reused to resolve types
  const persistor = persistStore(store);

  return {
    clearStore,
    store,
    useAppDispatch,
    persistor,
  };
};

/**
 @docs
  - This is the store start configuration.
 */
