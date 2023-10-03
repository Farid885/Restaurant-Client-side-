import React from "react";
import Header from "./Header";
import Footer from "../Layout/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
<<<<<<< HEAD

     
=======
>>>>>>> b2b28983ffd98527c5ebbe852af86e160514d7b3
      <Footer />
    </div>
  );
}

export default Layout;
