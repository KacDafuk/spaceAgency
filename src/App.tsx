import React from "react";
import Layout from "./Layout/Layout";
import "./globalCss/global.css";
import "./globalCss/variables.css";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Layout>
        <></>
      </Layout>
      <Navbar />

      <Routes />
    </>
  );
}

export default App;
