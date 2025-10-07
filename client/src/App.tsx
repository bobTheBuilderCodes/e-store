import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingsPage from "./pages/Listings/ListingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
