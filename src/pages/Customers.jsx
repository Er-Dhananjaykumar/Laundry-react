import { useMemo, useState } from "react";
import "../styles/customer.css";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomerForm from "../components/Customer/CustomerForm";
import CustomerModal from "../components/Customer/CustomerModal";
import CustomerSearch from "../components/Customer/CustomerSearch";

const initialCustomers = [
  {
    id: 1,
    name: "Rahul",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    address: "12, Main Street",
    city: "Delhi",
    pincode: "110001",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman",
    mobile: "9123456780",
    email: "aman@gmail.com",
    address: "45, Park Lane",
    city: "Mumbai",
    pincode: "400001",
    status: "Inactive",
  },
];

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const openModal = () => {
    setEditingCustomer(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  const handleSave = (customer) => {
    if (editingCustomer) {
      setCustomers((prevCustomers) =>
        prevCustomers.map((item) => (item.id === editingCustomer.id ? { ...item, ...customer } : item))
      );
    } else {
      setCustomers((prevCustomers) => [
        {
          ...customer,
          id: Date.now(),
        },
        ...prevCustomers,
      ]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
  };

  const filteredCustomers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return customers;

    return customers.filter((customer) =>
      [customer.name, customer.mobile, customer.email, customer.city, customer.status]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [customers, searchTerm]);

  return (
    <>
      <h1>Customers</h1>

      <CustomerSearch
        value={searchTerm}
        onChange={setSearchTerm}
        onAddClick={openModal}
      />

      <div className="customer-card">
        <CustomerTable
          customers={filteredCustomers}
          onEdit={(customer) => {
            setEditingCustomer(customer);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <CustomerModal isOpen={isModalOpen} onClose={closeModal} title={editingCustomer ? "Edit Customer" : "Add Customer"}>
        <CustomerForm
          initialValues={editingCustomer}
          onSave={handleSave}
          onCancel={closeModal}
        />
      </CustomerModal>
    </>
  );
}

export default Customers;