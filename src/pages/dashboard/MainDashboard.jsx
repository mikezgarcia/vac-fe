import React from "react";
import DashboardNav from "./DashboardNav";
import MainStats from "./MainStats";
import Members from "./members/MembersProfile";
import SidePanel from "./members/MemberSidePanel";

export default function MainDashboard() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <SidePanel />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <DashboardNav />
          <div>
            <MainStats />
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
}
