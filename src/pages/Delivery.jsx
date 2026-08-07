import { useMemo, useState } from "react";
import "../styles/pickup-delivery.css";
import DeliveryTable from "../components/PickupDelivery/DeliveryTable";
import StatusTimeline from "../components/PickupDelivery/StatusTimeline";

const initialDeliveryData = [
  {
    id: 1,
    customer: "Rahul Sharma",
    address: "House 12, Sector 15, Noida",
    pickupDate: "2026-08-07",
    deliveryDate: "2026-08-08",
    rider: "Aman",
    status: "Delivered"
  },
  {
    id: 2,
    customer: "Priya Mehta",
    address: "Flat 4, Gulmohar Lane, Delhi",
    pickupDate: "2026-08-08",
    deliveryDate: "2026-08-09",
    rider: "Neeraj",
    status: "In Transit"
  }
];

const statuses = ["Scheduled", "Picked Up", "In Transit", "Delivered", "Delayed"];

function Delivery() {
  const [records, setRecords] = useState(initialDeliveryData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedRecord, setSelectedRecord] = useState(initialDeliveryData[0]);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const matchesSearch = [record.customer, record.address, record.rider, record.status]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All" || record.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [records, search, statusFilter]);

  const updateStatus = (id, nextStatus) => {
    setRecords((prev) => prev.map((item) => (item.id === id ? { ...item, status: nextStatus } : item)));
  };

  return (
    <div className="delivery-page">
      <div className="page-header">
        <div>
          <h1>Delivery Management</h1>
          <p>Track deliveries and update order status in real time.</p>
        </div>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search customer, address, or rider"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          {statuses.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      <div className="card-panel">
        <DeliveryTable
          records={filteredRecords}
          onSelect={setSelectedRecord}
          onStatusChange={updateStatus}
        />
      </div>

      <div className="card-panel">
        <StatusTimeline record={selectedRecord} statuses={statuses} onStatusChange={updateStatus} />
      </div>
    </div>
  );
}

export default Delivery;
