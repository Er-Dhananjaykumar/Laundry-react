import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;