import React from "react";
import Layout from "./Components/Layout/Layout";
import Routing from "./Components/Layout/Routing";

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
