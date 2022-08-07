import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

// FIXME: fix types here
interface IProps {
  store: any;
  persistor: any;
  children: React.ReactNode | React.ReactNode[];
}

export const StateProvider = ({ store, persistor, children }: IProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
