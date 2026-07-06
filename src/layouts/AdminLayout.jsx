import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;