import {
  TrendingUp,
} from "lucide-react";
import AdminLayout from "./AdminLayout";

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
    { name: "Steven Summer", time: "2 Minutes Ago", amount: "+$52.00", avatar: "SS" },
    { name: "Jordan Malese", time: "20 Minutes Ago", amount: "+$83.00", avatar: "JM" },
    { name: "Jessica Alba", time: "1 Hour Ago", amount: "+$41.60", avatar: "JA" },
    { name: "Anna Armas", time: "2 Minutes Ago", amount: "+$2334.00", avatar: "AA" },
    { name: "Angelina Boe", time: "3 Minutes Ago", amount: "+$152.00", avatar: "AB" },
    { name: "Anastasia Kess", time: "11 Minutes Ago", amount: "+$562.00", avatar: "AK" },
  ];

  const orders: Order[] = [
    { name: "David Astee", amount: "$1,456", status: "Chargeback", date: "11 Sep 2022", avatar: "DA" },
    { name: "Maria Hubina", amount: "$62 4378", status: "Completed", date: "11 Sep 2022", avatar: "MH" },
    { name: "Arnold Swartz", amount: "$3,412", status: "Completed", date: "11 Sep 2022", avatar: "AS" },
  ];

  const weekData = [
    { day: "Mon", value: 25 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 30 },
    { day: "Fri", value: 28 },
    { day: "Sat", value: 42 },
    { day: "Sun", value: 38 },
  ];

  const maxValue = Math.max(...weekData.map((d) => d.value));

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 flex">
    
    
      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
         
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Balance",
                value: "$56,874",
                growth: "+12%",
                bg: "from-[#c8d4b8] to-[#b8c9a8]",
              },
              {
                title: "Sales",
                value: "$24,575",
                growth: "+8%",
                bg: "from-[#f5dda9] to-[#f0d89a]",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${card.bg} rounded-3xl p-6 text-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-sm font-medium text-gray-700">{card.title}</div>
                  <div className="bg-white/40 px-2 py-1 rounded-lg text-xs font-semibold">
                    {card.growth}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">{card.value}</div>
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
            ))}

            {/* Upgrade card */}
            <div className="bg-gradient-to-br from-[#a5a8d5] to-[#9296cc] rounded-3xl p-6 text-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-sm font-medium mb-2">Upgrade to Pro</div>
              <div className="text-xs mb-4 text-white/80">
                Get 1 month free and unlock all pro features
              </div>
              <button className="bg-white/20 hover:bg-white/30 transition-colors backdrop-blur px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                Go Pro
              </button>
            </div>

            {/* Monthly Profits */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                  <div className="text-2xl font-bold text-gray-800">$7,356</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { color: "#d4a5a5", label: "Invoices", value: "60%" },
                  { color: "#a5a8d5", label: "Total", value: "24%" },
                  { color: "#d1d5db", label: "Debt", value: "16%" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-semibold text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* User Stats */}
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                      Users in The Last Week
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">+3.2%</span>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-gray-600 transition">
                    See statistics for all time
                  </button>
                </div>

                <div className="flex items-end justify-between h-64 gap-2">
                  {weekData.map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-2 group"
                    >
                      <div className="w-full bg-gray-100 rounded-t-2xl relative overflow-hidden">
                        <div
                          className="absolute bottom-0 w-full bg-gray-800 rounded-t-2xl transition-all duration-300 group-hover:bg-gray-700"
                          style={{ height: `${(item.value / maxValue) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orders */}
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-lg font-semibold text-gray-800">Last Orders</h2>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition">
                      Data Updates Every 5 Hours
                    </button>
                    <button className="text-xs px-3 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition">
                      View All Orders
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 py-3 border-b last:border-0 border-gray-100 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
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
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Completed"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
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
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Recent Sales</h2>
                <button className="text-sm text-gray-400 hover:text-gray-600 transition">
                  See All
                </button>
              </div>

              <div className="space-y-4">
                {sales.map((sale, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 shadow-sm">
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
    
    </AdminLayout>
    
  );
}

export default App;
