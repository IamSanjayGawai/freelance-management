"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../dashboard/page";
import Task from "../tasks/page";
import Clients from "../clients/page";
import Quotes from "../quotes/page";
import Payments from "../payments/page";




const HomePage = () => {

  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = React.useState("dashboard");

  const handleNavigation = (component: string) => {
    setSelectedComponent(component);
  };
const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard />;
      case "tasks":
        return <Task />;
      case "clients":
        return <Clients />;
      case "quotes":
        return <Quotes />;
      case "payments":
        return <Payments />;
      default:
        return <Dashboard />;
    }
  }



  return (
    <div className="bg-gray-50 font-['Inter']">
      <div className="flex min-h-screen">
      <aside className="hidden lg:block w-0 lg:w-64 bg-white border-r border-gray-200 fixed h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <img src="/api/placeholder/128/32" alt="Logo" className="h-8" />
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              <button
                onClick={() => handleNavigation("dashboard")}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  selectedComponent === "dashboard"
                    ? "text-custom bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <i className="fas fa-home w-5"></i>
                <span className="ml-3">Dashboard</span>
              </button>
              <button
                onClick={() => handleNavigation("tasks")}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  selectedComponent === "tasks"
                    ? "text-custom bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <i className="fas fa-tasks w-5"></i>
                <span className="ml-3">Tasks</span>
              </button>
              <button
                onClick={() => handleNavigation("clients")}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  selectedComponent === "clients"
                    ? "text-custom bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <i className="fas fa-users w-5"></i>
                <span className="ml-3">Clients</span>
              </button>
              <button
                onClick={() => handleNavigation("quotes")}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  selectedComponent === "quotes"
                    ? "text-custom bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <i className="fas fa-file-invoice w-5"></i>
                <span className="ml-3">Quotes</span>
              </button>
              <button
                onClick={() => handleNavigation("payments")}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  selectedComponent === "payments"
                    ? "text-custom bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <i className="fas fa-credit-card w-5"></i>
                <span className="ml-3">Payments</span>
              </button>
            </div>
          </nav>
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
            <div className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">John Smith</p>
                <p className="text-xs text-gray-500">Premium Account</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-gray-200">
        <div className="px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, John</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-lg bg-custom text-white px-4 py-2 text-sm font-medium flex items-center">
              <i className="fas fa-video mr-2"></i>
              Schedule Meeting
            </button>
            <button className="text-gray-500 hover:text-gray-600">
              <i className="fas fa-bell text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      <div className="p-8">
        {renderComponent()}
        </div>

        </main>
      </div>
    </div>
  );
};

export default HomePage;
