import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Bookings from "./pages/Bookings";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings/>}/>

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;