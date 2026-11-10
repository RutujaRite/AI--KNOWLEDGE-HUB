import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import DataUpload from "./pages/DataUpload";
import DataCleaning from "./pages/DataCleaning";
import DatasetHistory from "./pages/DatasetHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="upload" element={<DataUpload />} />

          <Route path="cleaning" element={<DataCleaning />} />

          <Route path="history" element={<DatasetHistory />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;