import React from "react";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home";
import Routing from "./Components/Layout/Routing";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Layout/Footer";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
};

export default App;
