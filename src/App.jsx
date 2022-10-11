import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/dashboard/Members";
import SidePanel from "./pages/dashboard/SidePanel";
import MainStats from "./pages/dashboard/MainStats";
import DashboardNav from "./pages/dashboard/DashboardNav";
import MainDashboard from "./pages/dashboard/MainDashboard";
import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import HeroIcons from "./components/sections/HeroIcons";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/Footer";
import OpenNavbarMobile from "./components/utilities/OpenNavbarMobile";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* Landing Page - Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<Members />} />
        <Route path="/sidepanel" element={<SidePanel />} />
        <Route path="/mainstat" element={<MainStats />} />
        <Route path="/dashboardnav" element={<DashboardNav />} />
        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/heroicons" element={<HeroIcons />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mvopen-nav" element={<OpenNavbarMobile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
