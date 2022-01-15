import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import SimpleReactLightbox from 'simple-react-lightbox'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
Amplify.configure({
    Storage:{
        AWS3:{
            bucket:'toydrivea7b76144b859406b9de6f579699fd99d133655-dev',
            region:'us-west-1'

        }
    }
})

ReactDOM.render(

  <React.StrictMode>
    <HashRouter>
      <SimpleReactLightbox>

      <ScrollToTop />
      <App />
      <Footer />
      </SimpleReactLightbox>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
