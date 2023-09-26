import React from "react";
import Header from "./Header";
import Footer from "../Layout/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}

     
      <Footer />
    </div>
  );
}

export default Layout;
