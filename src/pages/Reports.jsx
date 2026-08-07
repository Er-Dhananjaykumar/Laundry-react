import { useMemo, useState } from "react";
import "../styles/reports.css";
import SalesReport from "../components/Reports/SalesReport";
import BookingReport from "../components/Reports/BookingReport";
import RevenueChart from "../components/Reports/RevenueChart";
import CustomerReport from "../components/Reports/CustomerReport";

const salesData = [
  { month: "Jan", sales: 120000, bookings: 45 },
  { month: "Feb", sales: 145000, bookings: 51 },
  { month: "Mar", sales: 160000, bookings: 57 },
  { month: "Apr", sales: 175000, bookings: 61 },
  { month: "May", sales: 188000, bookings: 66 },
  { month: "Jun", sales: 210000, bookings: 72 }
];

const bookingsData = [
  { id: 1, customer: "Rahul Sharma", service: "Wash & Fold", amount: 450, status: "Completed" },
  { id: 2, customer: "Priya Mehta", service: "Dry Cleaning", amount: 680, status: "Pending" },
  { id: 3, customer: "Arjun Singh", service: "Ironing", amount: 320, status: "Completed" }
];

const customerData = [
  { id: 1, name: "Rahul Sharma", visits: 12, spend: 5400, loyalty: "Gold" },
  { id: 2, name: "Priya Mehta", visits: 8, spend: 3600, loyalty: "Silver" },
  { id: 3, name: "Arjun Singh", visits: 15, spend: 7200, loyalty: "Gold" }
];

function Reports() {
  const [range, setRange] = useState("monthly");
  const [year, setYear] = useState("2026");

  const summary = useMemo(() => {
    const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
    const totalBookings = salesData.reduce((sum, item) => sum + item.bookings, 0);
    const avgBooking = totalBookings / salesData.length;

    return { totalSales, totalBookings, avgBooking };
  }, []);

  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1>Reports Dashboard</h1>
          <p>Analyze sales, bookings, revenue, and customer performance.</p>
        </div>

        <div className="report-filters">
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            <option value="monthly">Monthly Report</option>
            <option value="yearly">Yearly Report</option>
          </select>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <h3>Total Sales</h3>
          <p>₹{summary.totalSales.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Bookings</h3>
          <p>{summary.totalBookings}</p>
        </div>
        <div className="summary-card">
          <h3>Avg Bookings / Month</h3>
          <p>{summary.avgBooking.toFixed(1)}</p>
        </div>
        <div className="summary-card">
          <h3>Selected View</h3>
          <p>{range === "monthly" ? "Monthly" : "Yearly"}</p>
        </div>
      </div>

      <div className="card-panel">
        <RevenueChart data={salesData} range={range} year={year} />
      </div>

      <div className="report-grid">
        <div className="card-panel">
          <SalesReport data={salesData} />
        </div>
        <div className="card-panel">
          <BookingReport bookings={bookingsData} />
        </div>
      </div>

      <div className="card-panel">
        <CustomerReport customers={customerData} />
      </div>
    </div>
  );
}

export default Reports;