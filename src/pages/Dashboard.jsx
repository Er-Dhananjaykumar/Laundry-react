import {
    FaUsers,
    FaClipboardList,
    FaMoneyBillWave,
    FaClock
} from "react-icons/fa";

import StatCard from "../components/Dashboard/StatCard";
import BookingTable from "../components/Dashboard/BookingTable";

import "../components/Dashboard/Dashboard.css";

function Dashboard() {

    const dashboardData = {

        customers:150,

        bookings:89,

        revenue:"₹45,000",

        pending:20

    };

    return (

        <>

            <h1 className="page-title">
                Dashboard
            </h1>

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