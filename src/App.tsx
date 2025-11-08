import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Layout from "./components/layout/Layout";

function App() {
  return (
    // Default font is Inter
    <div className="font-['Inter']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
