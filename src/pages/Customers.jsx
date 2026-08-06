import { useState } from "react";
import "../styles/customer.css";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomerForm from "../components/Customer/CustomerForm";
import CustomerModal from "../components/Customer/CustomerModal";

const initialCustomers = [
  {
    id: 1,
    name: "Rahul",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman",
    mobile: "9123456780",
    email: "aman@gmail.com",
    status: "Active",
  },
];

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
    closeModal();
  };

  return (
    <>
      <h1>Customers</h1>

      <div className="customer-toolbar">
        <input type="text" placeholder="Search Customer..." />

        <button type="button" onClick={openModal}>
          + Add Customer
        </button>
      </div>

      <div className="customer-card">
        <CustomerTable customers={customers} />
      </div>

      <CustomerModal isOpen={isModalOpen} onClose={closeModal}>
        <CustomerForm onSave={addCustomer} onCancel={closeModal} />
      </CustomerModal>
    </>
  );
}

export default Customers;