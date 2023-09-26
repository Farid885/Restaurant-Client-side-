import React from "react";
import Routing from "./Components/Layout/Routing";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
   <Layout>
    <Routing/>
   </Layout>
    </div>
  );
};

export default App;
