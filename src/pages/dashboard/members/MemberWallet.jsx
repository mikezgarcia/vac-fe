import React from "react";

import DashboardNav from "../DashboardNav";
import MemberSidePanel from "../members/MemberSidePanel";
import MemberStats from "../members/MemberStat";

export default function MemberWallet() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <MemberSidePanel />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <DashboardNav />
          {/* Insert If here, check what is the Active Nav-Button (HOME,WALLET,ACTIVITIES,FORMS) */}
          {/* This is for Home Button */}
          <div>
            <MemberStats />
          </div>
          {/* end of Home */}

          {/* Wallet Here */}
          {/* Activities */}
          {/* Forms */}
        </div>
      </div>
    </div>
  );
}
