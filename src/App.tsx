import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Layout from "./components/layout/Layout";
import { Home } from "lucide-react";

function App() {
  return (
    // Default font is Inter
    <div className="font-['Inter']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
