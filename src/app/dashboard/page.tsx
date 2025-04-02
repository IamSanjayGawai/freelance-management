'use client';

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Dashboard: React.FC = () => {
  const activeProjectsChartRef = useRef(null);
  const completedProjectsChartRef = useRef(null);
  const pendingProjectsChartRef = useRef(null);

  useEffect(() => {
    // Initialize charts when component mounts
    if (activeProjectsChartRef.current) {
      initChart(activeProjectsChartRef.current, "rgba(34, 197, 94, 0.1)");
    }
    if (completedProjectsChartRef.current) {
      initChart(completedProjectsChartRef.current, "rgba(59, 130, 246, 0.1)");
    }
    if (pendingProjectsChartRef.current) {
      initChart(pendingProjectsChartRef.current, "rgba(234, 179, 8, 0.1)");
    }

    // Cleanup function to dispose charts when component unmounts
    return () => {
      if (activeProjectsChartRef.current) {
        echarts.getInstanceByDom(activeProjectsChartRef.current)?.dispose();
      }
      if (completedProjectsChartRef.current) {
        echarts.getInstanceByDom(completedProjectsChartRef.current)?.dispose();
      }
      if (pendingProjectsChartRef.current) {
        echarts.getInstanceByDom(pendingProjectsChartRef.current)?.dispose();
      }
    };
  }, []);

  const initChart = (
    element: HTMLElement | null | undefined,
    color: string
  ) => {
    const chart = echarts.init(element);
    const option = {
      animation: false,
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: "category",
        show: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
          symbol: "none",
          areaStyle: {
            color: color,
          },
          lineStyle: {
            color: color,
          },
        },
      ],
    };
    chart.setOption(option);
  };

  return (
    <>
    

  
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Projects
                </p>
                <h3 className="text-2xl font-semibold text-gray-900">12</h3>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                +2.5%
              </span>
            </div>
            <div ref={activeProjectsChartRef} className="h-24"></div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <h3 className="text-2xl font-semibold text-gray-900">48</h3>
              </div>
              <span className="bg-blue-100 text-custom text-xs font-medium px-2.5 py-0.5 rounded-full">
                +12.5%
              </span>
            </div>
            <div ref={completedProjectsChartRef} className="h-24"></div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <h3 className="text-2xl font-semibold text-gray-900">6</h3>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                +1.2%
              </span>
            </div>
            <div ref={pendingProjectsChartRef} className="h-24"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
                <button className="rounded-lg bg-custom text-white px-4 py-2 text-sm font-medium">
                  <i className="fas fa-plus mr-2"></i>
                  Add Task
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-custom border-gray-300 rounded"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Website Redesign
                    </p>
                    <p className="text-xs text-gray-500">Due Today</p>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    High
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-custom border-gray-300 rounded"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Mobile App Development
                    </p>
                    <p className="text-xs text-gray-500">Due Tomorrow</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Medium
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-custom border-gray-300 rounded"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Client Meeting
                    </p>
                    <p className="text-xs text-gray-500">Due in 2 days</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Low
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Clients
                </h3>
                <button className="rounded-lg text-custom border border-custom px-4 py-2 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </p>
                    <p className="text-xs text-gray-500">Tech Solutions Inc.</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-envelope"></i>
                    </button>
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-phone"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Michael Chen
                    </p>
                    <p className="text-xs text-gray-500">
                      Digital Marketing Co.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-envelope"></i>
                    </button>
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-phone"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Emma Wilson
                    </p>
                    <p className="text-xs text-gray-500">Creative Studios</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-envelope"></i>
                    </button>
                    <button className="text-gray-400 hover:text-custom">
                      <i className="fas fa-phone"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Payments
              </h3>
              <button className="rounded-lg text-custom border border-custom px-4 py-2 text-sm font-medium">
                Export
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="pb-4">Invoice</th>
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4">
                    <span className="text-sm font-medium text-gray-900">
                      #INV-2023
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src="/api/placeholder/24/24"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="ml-2 text-sm text-gray-900">
                        Sarah Johnson
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-900">$2,500</span>
                  </td>
                  <td className="py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-500">Oct 24, 2023</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <span className="text-sm font-medium text-gray-900">
                      #INV-2022
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src="/api/placeholder/24/24"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="ml-2 text-sm text-gray-900">
                        Michael Chen
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-900">$1,800</span>
                  </td>
                  <td className="py-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-500">Oct 23, 2023</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <span className="text-sm font-medium text-gray-900">
                      #INV-2021
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src="/api/placeholder/24/24"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="ml-2 text-sm text-gray-900">
                        Emma Wilson
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-900">$3,200</span>
                  </td>
                  <td className="py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-sm text-gray-500">Oct 22, 2023</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    </>
  );
};

export default Dashboard;
