import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoProvider } from "./context/todoContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TodoProvider>
  </React.StrictMode>
);
