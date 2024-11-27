"use client";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "@/components/UI/Spinner/Spinner";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  if (!store || !persistor) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Spinner centered />}>
        {children}
      </PersistGate>
    </Provider>
  );
}
