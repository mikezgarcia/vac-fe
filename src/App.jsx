import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MembersProfile from "./pages/dashboard/members/MembersProfile";
import SidePanel from "./pages/dashboard/members/MemberSidePanel";
import MainStats from "./pages/dashboard/MainStats";
import DashboardNav from "./pages/dashboard/DashboardNav";
import MainDashboard from "./pages/dashboard/MainDashboard";

import VACDashboard from "./pages/dashboard/admin/VACDashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import ConfirmTransaction from "./pages/dashboard/admin/ConfirmTransaction";
import AdminMembers from "./pages/dashboard/admin/AdminMembers";

import Edit from "./pages/dashboard/members/Edit";
import Update from "./pages/dashboard/members/Update";
import Delete from "./pages/dashboard/members/Delete";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* Main Pages*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Members Pages */}
        <Route path="/membersprofile" element={<MembersProfile />} />
        <Route path="/sidepanel" element={<SidePanel />} />
        <Route path="/mainstat" element={<MainStats />} />
        <Route path="/dashboardnav" element={<DashboardNav />} />
        <Route path="/maindashboard" element={<MainDashboard />} />

        {/* Members Action Pages */}
        <Route path="/edit" element={<Edit />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />

        <Route path="/vacdashboard" element={<VACDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/confirmtransaction" element={<ConfirmTransaction />} />
        <Route path="/adminmembers" element={<AdminMembers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
