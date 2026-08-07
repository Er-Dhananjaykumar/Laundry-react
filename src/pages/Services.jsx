import { useMemo, useState } from "react";
import "../styles/services.css";
import ServiceTable from "../components/Service/ServiceTable";
import ServiceForm from "../components/Service/ServiceForm";
import ServiceModal from "../components/Service/ServiceModal";

const categories = [
  "Wash",
  "Iron",
  "Dry Clean",
  "Steam Press",
  "Carpet Wash",
  "Blanket Wash",
  "Shoe Cleaning",
  "Curtain Cleaning",
];

const initialServices = [
  {
    id: 1,
    name: "Wash & Fold",
    category: "Wash",
    price: 80,
    deliveryTime: "24 Hours",
    status: "Active",
  },
  {
    id: 2,
    name: "Steam Press",
    category: "Steam Press",
    price: 50,
    deliveryTime: "Same Day",
    status: "Active",
  },
  {
    id: 3,
    name: "Dry Clean Suit",
    category: "Dry Clean",
    price: 180,
    deliveryTime: "48 Hours",
    status: "Inactive",
  },
];

function Services() {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const openModal = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleSave = (service) => {
    if (editingService) {
      setServices((prevServices) =>
        prevServices.map((item) => (item.id === editingService.id ? { ...item, ...service } : item))
      );
    } else {
      setServices((prevServices) => [{ ...service, id: Date.now() }, ...prevServices]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  const filteredServices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return services;

    return services.filter((service) =>
      [service.name, service.category, service.status, service.deliveryTime]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [services, searchTerm]);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Services</h1>
          <p>Manage laundry services and pricing</p>
        </div>

        <button type="button" className="add-btn" onClick={openModal}>
          + Add Service
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <ServiceTable
          services={filteredServices}
          onEdit={(service) => {
            setEditingService(service);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={closeModal} title={editingService ? "Edit Service" : "Add Service"}>
        <ServiceForm
          initialValues={editingService}
          categories={categories}
          onSave={handleSave}
          onCancel={closeModal}
        />
      </ServiceModal>
    </>
  );
}

export default Services;
