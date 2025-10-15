import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

interface Store {
  id: number;
  name: string;
  owner: string;
  email: string;
  phone: string;
  location: string;
  status: "Pending" | "Approved" | "Disapproved";
  registeredOn: string;
  logo: string;
  description: string;
}

const StoresPage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([
    {
      id: 1,
      name: "TechHub Electronics",
      owner: "John Doe",
      email: "john@techhub.com",
      phone: "+1 202 555 0147",
      location: "New York, USA",
      status: "Pending",
      registeredOn: "10 Oct 2025",
      logo: "https://etimg.etb2bimg.com/photo/76159933.cms",
      description: "A leading electronics retailer specializing in laptops, phones, and accessories.",
    },
    {
      id: 2,
      name: "Urban Fashion",
      owner: "Sarah Smith",
      email: "sarah@urbanfashion.com",
      phone: "+1 202 555 0112",
      location: "Los Angeles, USA",
      status: "Approved",
      registeredOn: "07 Oct 2025",
      logo: "https://i.ytimg.com/vi/UsV5lQ9kVJY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvcVX_rapybwEyLrWEb8HLrwi-qg",
      description: "Trendy urban wear store offering modern clothing and accessories.",
    },
    {
      id: 3,
      name: "GreenGrocer",
      owner: "Michael Lee",
      email: "mike@greengrocer.com",
      phone: "+1 202 555 0199",
      location: "Chicago, USA",
      status: "Disapproved",
      registeredOn: "02 Oct 2025",
      logo: "https://content.jdmagicbox.com/v2/comp/hyderabad/u5/040pxx40.xx40.100703151805.c8u5/catalogue/the-best-kirana-and-general-store-bazarghat-hyderabad-general-stores-rpvx1.jpg",
      description: "Fresh organic produce and groceries for sustainable living.",
    },
  ]);

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleStatusChange = (id: number, status: Store["status"]) => {
    setStores((prev) =>
      prev.map((store) => (store.id === id ? { ...store, status } : store))
    );
    setSelectedStore(null);
  };

  return (
    <AdminLayout pageTitle="Stores">
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Registered Stores</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-100 text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 font-semibold">
                <th className="py-3 px-4">Logo</th>
                <th className="py-3 px-4">Store Name</th>
                <th className="py-3 px-4">Owner</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Registered On</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr
                  key={store.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-4">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{store.name}</td>
                  <td className="py-3 px-4">{store.owner}</td>
                  <td className="py-3 px-4">{store.email}</td>
                  <td className="py-3 px-4">{store.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        store.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : store.status === "Disapproved"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {store.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{store.registeredOn}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setSelectedStore(store)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details Modal */}
        {selectedStore && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg relative">
              <button
                onClick={() => setSelectedStore(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                &times;
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selectedStore.logo}
                  alt={selectedStore.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {selectedStore.name}
                  </h3>
                  <p className="text-sm text-gray-500">{selectedStore.owner}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span> {selectedStore.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {selectedStore.phone}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {selectedStore.location}
                </p>
                <p>
                  <span className="font-semibold">Registered On:</span>{" "}
                  {selectedStore.registeredOn}
                </p>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {selectedStore.description}
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => handleStatusChange(selectedStore.id, "Disapproved")}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                >
                  Disapprove
                </button>
                <button
                  onClick={() => handleStatusChange(selectedStore.id, "Approved")}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default StoresPage;
