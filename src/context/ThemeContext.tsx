import React, { createContext, useContext, useReducer } from "react";

type ThemeState = {
  theme: string;
};

type ActionType =
  | { type: "INITIAL_THEME"; payload: "dark" | "light" }
  | { type: "TOGGLE_THEME" };

const InitialState: ThemeState = { theme: "light" };

export const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: InitialState,
  dispatch: () => {},
});

const themeReducer = (state: ThemeState, action: ActionType) => {
  switch (action.type) {
    case "INITIAL_THEME":
      return {
        theme: action.payload,
      };
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, InitialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
