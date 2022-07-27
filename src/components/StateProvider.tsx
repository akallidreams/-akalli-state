import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

// FIXME: fix types here
interface IProps {
  store: any;
  persistor: any;
  Router: React.ElementType;
}

export const StateProvider = ({ store, persistor, Router }: IProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};
