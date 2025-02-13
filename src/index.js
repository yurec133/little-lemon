import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import useScrollToTop from "./hooks/useScrollToTop";

const RootComponent = () => {
  useScrollToTop();
  return <App />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
