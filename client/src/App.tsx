import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreDetails from "./pages/store/StoreDetails";
import ProductDetails from "./pages/product/ProductDetails";
import { HomePage } from "./pages/Home/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import Stores from "./pages/admin/Stores";
import Messages from "./pages/admin/Messages";
import Settings from "./pages/admin/Settings";
import Payments from "./pages/admin/Payments";

function App() {
  return (
    <div className="w-screen">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/stores" element={<Stores />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/store/:id" element={<StoreDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
