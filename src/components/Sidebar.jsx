import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Laundry</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;