import { useMemo, useState } from "react";
import "../styles/pickup-delivery.css";
import PickupTable from "../components/PickupDelivery/PickupTable";
import AssignRiderModal from "../components/PickupDelivery/AssignRiderModal";

const initialPickupData = [
  {
    id: 1,
    customer: "Rahul Sharma",
    address: "House 12, Sector 15, Noida",
    pickupDate: "2026-08-07",
    deliveryDate: "2026-08-08",
    rider: "Aman",
    status: "Picked Up"
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

const riders = ["Aman", "Neeraj", "Kavya", "Rohit"];
const statuses = ["Scheduled", "Picked Up", "In Transit", "Delivered", "Delayed"];

function Pickup() {
  const [records, setRecords] = useState(initialPickupData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

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

  const handleAssign = (rider) => {
    setRecords((prev) => prev.map((item) => (item.id === selectedRecord.id ? { ...item, rider } : item)));
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const handleCreate = () => {
    const newRecord = {
      id: Date.now(),
      customer: "New Customer",
      address: "New Address",
      pickupDate: "2026-08-10",
      deliveryDate: "2026-08-11",
      rider: "Unassigned",
      status: "Scheduled"
    };
    setRecords((prev) => [newRecord, ...prev]);
  };

  const handleDelete = (id) => {
    setRecords((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="pickup-page">
      <div className="page-header">
        <div>
          <h1>Pickup Management</h1>
          <p>Coordinate pickup requests and rider assignments.</p>
        </div>
        <button type="button" className="primary-btn" onClick={handleCreate}>+ Add Pickup</button>
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
        <PickupTable
          records={filteredRecords}
          onAssign={(record) => {
            setSelectedRecord(record);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <AssignRiderModal
        isOpen={isModalOpen}
        riders={riders}
        selectedRecord={selectedRecord}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedRecord(null);
        }}
        onAssign={handleAssign}
      />
    </div>
  );
}

export default Pickup;
