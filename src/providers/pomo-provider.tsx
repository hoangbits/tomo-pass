import React, { ReactNode } from "react";
import { useLocalStore } from "mobx-react-lite";
import { createPomoStore } from "../stores/pomo-store";
import { pomoContext } from "../contexts/pomo-context";

export const PomoProvider = ({ children }: { children: ReactNode }) => {
  const store = useLocalStore(createPomoStore);
  return <pomoContext.Provider value={store}>{children}</pomoContext.Provider>;
};
