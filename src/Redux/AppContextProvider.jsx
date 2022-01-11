import { createContext } from "react";
import { store } from "./store";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { dispatch, getState } = store;
  const value = { dispatch, getState };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
