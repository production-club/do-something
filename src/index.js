import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "react-cookie-consent";
import pcLogo from "./logo.png";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CookieConsent
        style={{ background: "#000", height: "20%" }}
        buttonStyle={{ background: "#ff0000", color: "#fff", fontSize: "20px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <ScrollToTop />
      <App />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
