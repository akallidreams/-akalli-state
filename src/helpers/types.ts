import { Reducer } from "@reduxjs/toolkit";

export interface ICombinedReducers {
  [key: string]: Reducer;
}
