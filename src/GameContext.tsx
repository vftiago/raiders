import { createContext } from "react";
import { GameState } from "./data/createGame";

export const GameStateContext = createContext<GameState | null>(null);
