import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MemberProfile from "./pages/dashboard/members/MemberProfile";
import MemberSidePanel from "./pages/dashboard/members/MemberSidePanel";
import MemberStat from "./pages/dashboard/members/MemberStat";
import DashboardNav from "./pages/dashboard/DashboardNav";
import MemberDashboard from "./pages/dashboard/members/MemberDashboard";

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
        <Route path="/memberprofile" element={<MemberProfile />} />
        <Route path="/sidepanel" element={<MemberSidePanel />} />
        <Route path="/memberstat" element={<MemberStat />} />
        <Route path="/dashboardnav" element={<DashboardNav />} />
        <Route path="/memberdashboard" element={<MemberDashboard />} />

        {/*Admin Members Action Pages */}
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
