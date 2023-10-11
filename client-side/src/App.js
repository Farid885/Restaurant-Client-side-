import React, { useEffect } from "react";
import Routing from "./Components/Layout/Routing";
import Layout from "./Components/Layout/Layout";

const App = () => {
  //Scroll animation
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "5px",
      threshold: 0.5,
    };
    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim");
    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);
  return (
    <div className="App">
   <Layout>
    <Routing/>
   </Layout>
    </div>
  );
};

export default App;
