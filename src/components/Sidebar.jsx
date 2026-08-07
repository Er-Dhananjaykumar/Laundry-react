import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaClipboardList, FaMoneyBill, FaFileInvoiceDollar, FaTruck, FaUserTie, FaBoxOpen, FaStore, FaShoppingCart, FaChartBar, FaUser, FaCog } from "react-icons/fa";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2>Laundry ERP</h2>

            <ul>

                <li>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaHome />

                        Dashboard

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/customers"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaUsers />

                        Customers

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/bookings"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaClipboardList />

                        Bookings

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/payments"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaMoneyBill />

                        Payments

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/invoices"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaFileInvoiceDollar />

                        Invoices

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/pickup"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaTruck />

                        Pickup

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/delivery"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaTruck />

                        Delivery

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/employees"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaUserTie />

                        Employees

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/inventory"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaBoxOpen />

                        Inventory

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/vendor"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaStore />

                        Vendor

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/purchase"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaShoppingCart />

                        Purchase

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaChartBar />

                        Reports

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaUser />

                        Profile

                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <FaCog />

                        Settings

                    </NavLink>

                </li>

            </ul>

        </div>

    );

}

export default Sidebar;