import React, { ReactNode } from "react";
import { createPomoStore, PStore } from "../stores/pomo-store";

export const pomoContext = React.createContext<PStore | null>(null);
