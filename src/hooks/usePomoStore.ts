import React from "react";
import { pomoContext } from "../contexts/pomo-context";
import { POMOS } from "../utils/constant";

export const usePomoStore = () => {
  const store = React.useContext(pomoContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("usePomoStore must be used within a PomoProvider.");
  }
  /**
   * 1.load default if localstorage don't have
   * 2.load from localstorage
   */
  if (store.isEmpty) {
    if (localStorage.length === 0) {
      store.initAllPomos();
    }
    if (localStorage.length > 0) {
      const pomos = JSON.parse(<string>localStorage.getItem(POMOS));
      store.initAllPomos(pomos);
    }
  }
  return store;
};
