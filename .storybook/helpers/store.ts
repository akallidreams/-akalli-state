import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import thunk from 'redux-thunk'
import { createWhitelistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";
import { useDispatch } from "react-redux";

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

const sliceSample = createSlice({
  name: "slice-sample",
  initialState: {},
  reducers: {
    auth(state) {
      state.tokens++;
    },
  },
});

const rootReducer = combineReducers({
  auth: sliceSample.reducer,
});

export const clearStore = () => AsyncStorage.removeItem("persist:root");

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

/**
 @docs
  - This is the store start configuration.
 */
