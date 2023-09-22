import React from "react";
import About from "../Pages/about/About";
import Header from "./Header";
import Home from "../Pages/Home";
import Footer from "../Layout/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}

      {/* <Home/>
           <About/> */}
      <Footer />
    </div>
  );
}

export default Layout;
