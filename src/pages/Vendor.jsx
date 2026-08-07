import { useMemo, useState } from "react";
import "../styles/inventory.css";
import VendorTable from "../components/Inventory/VendorTable";

const initialVendors = [
  { id: 1, vendorName: "Aqua Supplies", contact: "9876543210", address: "Noida", status: "Active" },
  { id: 2, vendorName: "Fresh Traders", contact: "9123456780", address: "Delhi", status: "Active" }
];

function Vendor() {
  const [vendors, setVendors] = useState(initialVendors);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendors = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return vendors;

    return vendors.filter((vendor) =>
      [vendor.vendorName, vendor.contact, vendor.address, vendor.status]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [vendors, searchTerm]);

  return (
    <div className="inventory-page">
      <div className="page-header">
        <div>
          <h1>Vendor Management</h1>
          <p>Track vendor partners and their contact details.</p>
        </div>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search vendors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <VendorTable vendors={filteredVendors} />
      </div>
    </div>
  );
}

export default Vendor;
