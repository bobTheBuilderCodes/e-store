import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreDetails from "./pages/store/StoreDetails";
import ProductDetails from "./pages/product/ProductDetails";
import { HomePage } from "./pages/listings/ListingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store/:id" element={<StoreDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
