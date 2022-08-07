import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AkState } from "./src";
import { createSlice } from "@reduxjs/toolkit";
import { StateProvider } from "./src/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface IState {
  auth: IAuthState;
}

interface IAuthState {
  isLoggedIn: boolean;
}

const slice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state: IAuthState) => {
      state.isLoggedIn = true;
    },
  },
});

export const { clearStore, store, useAppDispatch, persistor } =
  AkState.reduxInit({
    auth: slice.reducer,
  });

export default function App() {
  return (
    <StateProvider store={store} persistor={persistor}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <ChildComponent />
      </View>
    </StateProvider>
  );
}

const ChildComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(slice.actions.login());
  }, []);
  const isLoggedIn = useSelector((state: IState) => state?.auth?.isLoggedIn);
  if (isLoggedIn) {
    return <Text>You are logged in</Text>;
  } else {
    return <Text>You are not logged in</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
