import React, { useState } from "react";
import {
  BarChart3,
  CreditCard,
  Package,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, pageTitle = "Dashboard" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { icon: <BarChart3 />, label: "Dashboard", active: pageTitle === "Dashboard", slug: "/admin" },
    { icon: <Users />, label: "Stores", active: pageTitle === "Stores", slug: "/admin/stores" },
    { icon: <CreditCard />, label: "Payment", active: pageTitle === "Payment", slug: "/admin/payments" },
    { icon: <MessageSquare />, label: "Messages", active: pageTitle === "Messages", slug: "/admin/messages" },
    { icon: <Settings />, label: "Settings", active: pageTitle === "Settings", slug: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Sidebar (mobile + desktop) */}
      <aside
        className={`fixed h-screen lg:static top-0 left-0 w-64 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium flex flex-col shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Close button (mobile) */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white hover:text-gray-300 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-6 pt-2">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lg">Zares</span>
        </div>

        {/* User info */}
        <div className="flex flex-col items-center mb-8 pb-6 border-b border-white/10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 mb-3 overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-50">Welcome Back,</p>
          <p className="font-semibold">Mark Johnson</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.slug}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-white/15 shadow-md"
                  : "hover:bg-white/10 hover:shadow-sm text-gray-50"
              }`}
              onClick={() => setSidebarOpen(false)} // auto close on mobile nav click
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-50 hover:bg-white/10 hover:shadow-sm transition-all duration-200 mt-4 mx-4 mb-6"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </a>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Hamburger Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{pageTitle}</h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-10 bg-white rounded-xl border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
