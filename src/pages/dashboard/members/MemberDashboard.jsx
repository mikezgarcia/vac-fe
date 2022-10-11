import React from "react";
import DashboardNav from "../DashboardNav";
import MemberStats from "../members/MemberStat";
import MemberProfile from "../members/MemberProfile";
import MemberSidePanel from "../members/MemberSidePanel";

export default function MainDashboard() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <MemberSidePanel />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <DashboardNav />
          <div>
            <MemberStats />
            <MemberProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
