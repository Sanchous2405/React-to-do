import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/screnns/Home/index";
import Layout from "./components/layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
