import { BarChart3, ShoppingCart, CreditCard, Package, Users, MessageSquare, Settings, LogOut, TrendingUp } from 'lucide-react';

interface Sale {
  name: string;
  time: string;
  amount: string;
  avatar: string;
}

interface Order {
  name: string;
  amount: string;
  status: string;
  date: string;
  avatar: string;
}

function App() {
  const sales: Sale[] = [
    { name: 'Steven Summer', time: '2 Minutes Ago', amount: '+$52.00', avatar: 'SS' },
    { name: 'Jordan Malese', time: '20 Minutes Ago', amount: '+$83.00', avatar: 'JM' },
    { name: 'Jessica Alba', time: '1 Hour Ago', amount: '+$41.60', avatar: 'JA' },
    { name: 'Anna Armas', time: '2 Minutes Ago', amount: '+$2334.00', avatar: 'AA' },
    { name: 'Angelina Boe', time: '3 Minutes Ago', amount: '+$152.00', avatar: 'AB' },
    { name: 'Anastasia Kess', time: '11 Minutes Ago', amount: '+$562.00', avatar: 'AK' },
  ];

  const orders: Order[] = [
    { name: 'David Astee', amount: '$1,456', status: 'Chargeback', date: '11 Sep 2022', avatar: 'DA' },
    { name: 'Maria Hubina', amount: '$62 4378', status: 'Completed', date: '11 Sep 2022', avatar: 'MH' },
    { name: 'Arnold Swartz', amount: '$3,412', status: 'Completed', date: '11 Sep 2022', avatar: 'AS' },
  ];

  const weekData = [
    { day: 'Mon', value: 25 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 30 },
    { day: 'Fri', value: 28 },
    { day: 'Sat', value: 42 },
    { day: 'Sun', value: 38 },
  ];

  const maxValue = Math.max(...weekData.map(d => d.value));

  return (
    <div className="min-h-screen bg-[#e8e5dc] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2a2a2a] text-white rounded-3xl m-4 p-6 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lg">Zares</span>
        </div>

        <div className="flex flex-col items-center mb-8 pb-6 border-b border-white/10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-400">Welcome Back,</p>
          <p className="font-semibold">Mark Johnson</p>
        </div>

        <nav className="flex-1 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white">
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span>Statistics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Payment</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Transactions</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Package className="w-5 h-5" />
            <span>Products</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Users className="w-5 h-5" />
            <span>Customer</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span>Messages</span>
            <span className="ml-auto w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">3</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors mt-4">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-500 text-sm">Payments Updates</p>
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-10 bg-white rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-[#c8d4b8] to-[#b8c9a8] rounded-3xl p-6 text-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-medium text-gray-700">Balance</div>
                <div className="bg-white/40 px-2 py-1 rounded-lg text-xs font-semibold">+12%</div>
              </div>
              <div className="text-3xl font-bold mb-4">$56,874</div>
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="M0,30 Q25,20 50,25 T100,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700"
                />
              </svg>
            </div>

            <div className="bg-gradient-to-br from-[#f5dda9] to-[#f0d89a] rounded-3xl p-6 text-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-medium text-gray-700">Sales</div>
                <div className="bg-white/40 px-2 py-1 rounded-lg text-xs font-semibold">+8%</div>
              </div>
              <div className="text-3xl font-bold mb-4">$24,575</div>
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="M0,25 Q25,15 50,20 T100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700"
                />
              </svg>
            </div>

            <div className="bg-gradient-to-br from-[#a5a8d5] to-[#9296cc] rounded-3xl p-6 text-white">
              <div className="text-sm font-medium mb-2">Upgrade to Pro</div>
              <div className="text-xs mb-4 text-white/80">Get 1 month free and unlock all pro features</div>
              <button className="bg-white/20 hover:bg-white/30 transition-colors backdrop-blur px-4 py-2 rounded-lg text-sm font-medium">
                Go Pro
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-medium text-gray-600">Monthly Profits</div>
              </div>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#a5a8d5"
                    strokeWidth="12"
                    strokeDasharray="352"
                    strokeDashoffset="88"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-gray-800">$76,356</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#d4a5a5]"></div>
                    <span className="text-gray-600">Invoices</span>
                  </div>
                  <span className="font-semibold text-gray-800">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#a5a8d5]"></div>
                    <span className="text-gray-600">Total</span>
                  </div>
                  <span className="font-semibold text-gray-800">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="text-gray-600">Debt</span>
                  </div>
                  <span className="font-semibold text-gray-800">16%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* User Stats */}
              <div className="bg-white rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">User in The Last Week</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">+3,2%</span>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-gray-600">See statistics for all time</button>
                </div>

                <div className="flex items-end justify-between h-64 gap-2">
                  {weekData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gray-100 rounded-t-2xl relative" style={{ height: '100%' }}>
                        <div
                          className="absolute bottom-0 w-full bg-gray-800 rounded-t-2xl transition-all duration-300 hover:bg-gray-700"
                          style={{ height: `${(item.value / maxValue) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Last Orders */}
              <div className="bg-white rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-lg font-semibold text-gray-800">Last Orders</h2>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                      Data Updates Every 5 Hours
                    </button>
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                      View All Orders
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <div key={index} className="flex items-center gap-4 py-3 border-b last:border-0 border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        {order.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 truncate">{order.name}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-gray-800">{order.amount}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-red-50 text-red-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 flex-shrink-0 hidden sm:block">
                        {order.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div className="bg-white rounded-3xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Recent Sales</h2>
                <button className="text-sm text-gray-400 hover:text-gray-600">See All</button>
              </div>

              <div className="space-y-4">
                {sales.map((sale, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                      {sale.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm truncate">{sale.name}</p>
                      <p className="text-xs text-gray-500">{sale.time}</p>
                    </div>
                    <div className="font-semibold text-gray-800 text-sm flex-shrink-0">
                      {sale.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
