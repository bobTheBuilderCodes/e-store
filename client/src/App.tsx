import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreDetails from "./pages/store/StoreDetails";
import ProductDetails from "./pages/product/ProductDetails";
import { HomePage } from "./pages/Home/HomePage";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="w-screen">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/store/:id" element={<StoreDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
