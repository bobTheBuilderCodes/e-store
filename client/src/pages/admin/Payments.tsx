import React, { useState, useMemo } from "react";
import AdminLayout from "./AdminLayout";

interface Payment {
  id: string;
  shopName: string;
  amount: number;
  method: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

const Payments: React.FC = () => {
  const [search, setSearch] = useState("");

  const payments: Payment[] = [
    {
      id: "TXN-1001",
      shopName: "TechHub Electronics",
      amount: 450.75,
      method: "Stripe",
      status: "Completed",
      date: "2025-10-10",
    },
    {
      id: "TXN-1002",
      shopName: "Urban Fashion",
      amount: 120.5,
      method: "PayPal",
      status: "Pending",
      date: "2025-10-09",
    },
    {
      id: "TXN-1003",
      shopName: "GreenGrocer",
      amount: 250.0,
      method: "Bank Transfer",
      status: "Failed",
      date: "2025-10-08",
    },
    {
      id: "TXN-1004",
      shopName: "Beauty & Bloom",
      amount: 320.99,
      method: "Stripe",
      status: "Completed",
      date: "2025-10-07",
    },
    {
      id: "TXN-1005",
      shopName: "Gadget World",
      amount: 780.4,
      method: "Flutterwave",
      status: "Completed",
      date: "2025-10-05",
    },
  ];

  const filteredPayments = useMemo(
    () =>
      payments.filter(
        (p) =>
          p.shopName.toLowerCase().includes(search.toLowerCase()) ||
          p.id.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const getStatusColor = (status: Payment["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  return (
    <AdminLayout pageTitle="All Payments">
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Payments Overview</h2>
          <input
            type="text"
            placeholder="Search by shop or transaction ID..."
            className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-gray-200 focus:outline-none w-full md:w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 uppercase text-xs">
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Shop</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-50 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {payment.id}
                    </td>
                    <td className="py-3 px-4">{payment.shopName}</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">
                      ${payment.amount.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{payment.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-6 text-center text-gray-400 text-sm"
                  >
                    No payments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Payments;
