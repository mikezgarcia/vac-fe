import React from "react";
import { Icon } from "@iconify/react";

export default function MemberTransactions() {
  return (
    <div className="flex flex-col m-5">
      <div className="overflow-x-auto">
        <div className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="relative">
            <h3 className="font-bold text-blue-900 text-2xl">
              Wallet/Cash-in/Cash-out/Invest Transactions
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <div className=" flex flex-col font-sans font-normal text-lg text-primary mt-4  md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
              <label className="hidden md:flex">MONTH:</label>
              <input
                className="border border-primary rounded-lg md:w-1/6 h-9 placeholder:pl-4 text-right pr-5"
                type="text"
                placeholder="October"
              />
              <label className="hidden md:flex">YEAR:</label>
              <input
                className="border border-primary rounded-lg md:w-1/6 h-9 placeholder:pl-4 text-right pr-5"
                type="number"
                placeholder="2022"
              />

              <button className="relative z-0 inline-flex text-lg rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 bg-blue-900 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-1">
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-lg font-medium text-white bg-blue-900 border border-blue-900 rounded-md sm:py-2">
                  <div className="hidden sm:block">View Transactions</div>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-1 bg-primary " /> */}

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="bg-blue-900">
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Referrence Code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Operation
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border border-blue-900">
                {/* Loop Entries here */}
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    10/01/2022 8:27PM
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    C0000054345656
                  </td>

                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    23,000.00
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Cash Out
                  </td>
                  <td className="flex-wrap px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
                    <div className="flex items-center justify-center">
                      <Icon icon="fa:eye" className="text-2xl pr-3" />
                      <Icon icon="fa:edit" className="text-2xl pr-3" />
                      <Icon
                        icon="material-symbols:delete-forever"
                        className="text-3xl pr-3"
                      />
                    </div>
                  </td>
                </tr>
                {/* End of 1 Row Entry */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
