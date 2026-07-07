import { FaUsers, FaClipboardList, FaMoneyBillWave, FaClock } from "react-icons/fa";

import StatCard from "../components/Dashboard/StatCard";
import BookingTable from "../components/Dashboard/BookingTable";
import { useAuth } from "../context/AuthContext";
import "../components/Dashboard/Dashboard.css";

function Dashboard() {
  const auth = useAuth();
  const dashboardData = {

    customers: 150,

    bookings: 89,

    revenue: "₹45,000",

    pending: 20

  };

const hour = new Date().getHours();

let greeting = "Good Evening";

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 17) {
    greeting = "Good Afternoon";
}

  return (

    <>

      <div className="dashboard-header">
        <h1>Dashboard</h1>

        <div className="welcome-text">
          <h3>👋 {greeting}, {auth.user?.name}</h3>
          <p>Here's what's happening in your laundry business today.</p>
        </div>
      </div>
      <div className="card-container">

        <StatCard
          title="Customers"
          value={dashboardData.customers}
          icon={<FaUsers />}
          color="#3498db"
        />

        <StatCard
          title="Bookings"
          value={dashboardData.bookings}
          icon={<FaClipboardList />}
          color="#2ecc71"
        />

        <StatCard
          title="Revenue"
          value={dashboardData.revenue}
          icon={<FaMoneyBillWave />}
          color="#f39c12"
        />

        <StatCard
          title="Pending"
          value={dashboardData.pending}
          icon={<FaClock />}
          color="#e74c3c"
        />

      </div>

      <BookingTable />

    </>

  );

}

export default Dashboard;