import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
 // Добавляем стили
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));