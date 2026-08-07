import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Services from "./pages/Services";
import Items from "./pages/Items";
import Bookings from "./pages/Bookings";
import Payments from "./pages/Payments";
import Invoices from "./pages/Invoices";
import Pickup from "./pages/Pickup";
import Delivery from "./pages/Delivery";
import Employees from "./pages/Employees";
import Inventory from "./pages/Inventory";
import Vendor from "./pages/Vendor";
import Purchase from "./pages/Purchase";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* Login */}
            <Route path="/" element={<Login />} />

            {/* Protected Routes */}
            <Route
                element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/services" element={<Services />} />
                <Route path="/items" element={<Items />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/pickup" element={<Pickup />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/vendor" element={<Vendor />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
            </Route>

        </Routes>
    );
}

export default App;