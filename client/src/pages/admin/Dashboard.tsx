import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  CreditCardIcon, 
   ArrowBigUp, BanknoteIcon,User2Icon,
  CogIcon,
} from 'lucide-react';

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  notification?: number;
}

interface SaleItem {
  name: string;
  time: string;
  amount: string;
  avatar: string;
}

interface OrderItem {
  name: string;
  amount: string;
  status: string;
  date: string;
  avatar: string;
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: ChartBarIcon, active: true },
    { name: 'Statistics', icon: CogIcon },
    { name: 'Payment', icon: CreditCardIcon },
    { name: 'Transactions', icon: BanknoteIcon },
    { name: 'Products', icon: () => <div className="w-6 h-6 bg-gray-400 rounded"></div> },
    { name: 'Customer', icon: User2Icon },
    { name: 'Messages', icon: User2Icon, notification: 3 },
    { name: 'Settings', icon: CogIcon },
  ];

  const recentSales: SaleItem[] = [
    { name: 'Steven Summer', time: '2 Minutes Ago', amount: '$52.00', avatar: 'SS' },
    { name: 'Jordan Malone', time: '40 Minutes Ago', amount: '$44.00', avatar: 'JM' },
    { name: 'Jessica Alba', time: '1 Hour Ago', amount: '$61.60', avatar: 'JA' },
    { name: 'Anna Armas', time: '3 Minutes Ago', amount: '$233.00', avatar: 'AA' },
    { name: 'Angelina Doe', time: '5 Minutes Ago', amount: '$150.00', avatar: 'AD' },
    { name: 'Anastasia Koss', time: '7 Minutes Ago', amount: '$942.00', avatar: 'AK' },
  ];

  const lastOrders: OrderItem[] = [
    { name: 'David Aster', amount: '$1,456', status: 'Chargeback', date: '11 Sep 2022', avatar: 'DA' },
    { name: 'Maria Hubana', amount: '$42,478', status: 'Completed', date: '11 Sep 2022', avatar: 'MH' },
    { name: 'Arnold Swarz', amount: '$1,412', status: 'Completed', date: '11 Sep 2022', avatar: 'AS' },
  ];

  const weeklyData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 85 },
    { day: 'Wed', value: 90 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 95 },
    { day: 'Sun', value: 80 },
  ];

  const maxValue = Math.max(...weeklyData.map(d => d.value));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 bg-gray-900">
          <div className="flex items-center space-x-3">
            
            <span className="text-white font-semibold">e-store</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <User2Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">MJ</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Welcome Back</p>
              <p className="text-white font-medium">Mark Johnson</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                item.active 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
              {item.notification && (
                <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1">
                  {item.notification}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-3 right-3">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            <ArrowBigUp className="w-5 h-5" />
            <span>Log Out</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <ArrowBigUp className="w-6 h-6" />
              </button>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">Dashboard</h4>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <ArrowBigUp className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {/* Balance Card */}
            <div className="bg-green-100 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-800">Balance</span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">+17%</span>
              </div>
              <div className="text-2xl font-bold text-green-900 mb-4">$56,874</div>
              <div className="h-8 flex items-end space-x-1">
                {[20, 35, 25, 40, 30, 45, 35].map((height, i) => (
                  <div key={i} className="w-2 bg-green-500 rounded-t" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>

            {/* Sales Card */}
            <div className="bg-yellow-100 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-yellow-800">Sales</span>
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">+5%</span>
              </div>
              <div className="text-2xl font-bold text-yellow-900 mb-4">$24,575</div>
              <div className="h-8 flex items-end space-x-1">
                {[30, 25, 40, 35, 45, 30, 40].map((height, i) => (
                  <div key={i} className="w-2 bg-yellow-500 rounded-t" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Upgrade</h3>
              <p className="text-orange-100 text-sm mb-4">Get more out of your account with a premium subscription</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">
                Go Pro
              </button>
            </div>

            {/* Last card */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 min-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Monthly Profits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                      <circle cx="16" cy="16" r="12" fill="none" stroke="#3b82f6" strokeWidth="3" 
                        strokeDasharray="45.24" strokeDashoffset="18.1" className="transition-all duration-300"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-900">60%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-gray-900">$76,356</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-600">60%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-gray-600">24%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                        <span className="text-gray-600">16%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Analytics */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User in The Last Week</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-green-600">+3.2%</span>
                    <span className="text-sm text-gray-500">vs 7 days ago</span>
                  </div>
                </div>
                <button className="text-sm text-orange-600 hover:text-orange-700">See statistics for all time</button>
              </div>
              
              <div className="flex items-end justify-between h-32 space-x-2">
                {weeklyData.map((data, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2 flex-1">
                    <div 
                      className="w-full bg-gray-800 rounded-t"
                      style={{height: `${(data.value / maxValue) * 100}%`}}
                    ></div>
                    <span className="text-xs text-gray-500">{data.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Sales */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
                <button className="text-sm text-orange-600 hover:text-orange-700">See All</button>
              </div>
              
              <div className="space-y-4">
                {recentSales.map((sale, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{sale.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{sale.name}</p>
                      <p className="text-xs text-gray-500">{sale.time}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{sale.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Last Orders */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Last Orders</h3>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">Data updated Every 3 Hours</span>
                <button className="text-orange-600 hover:text-orange-700">View All Orders</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="space-y-3">
                  {lastOrders.map((order, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{order.avatar}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm font-semibold text-gray-900">{order.amount}</td>
                      <td className="py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-gray-500">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;