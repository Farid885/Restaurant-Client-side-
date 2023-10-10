import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "../Pages/About";
import Team from "../Pages/Team";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Reservation from "../Pages/Reservation";
function Routing() {
  // Scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //Refresh
  const navigate = useNavigate();
  navigate(0);

  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/reservation" element={<Reservation />} />
    </Routes>
  );
}

export default Routing;
