import { useMemo, useState } from "react";
import "../styles/payments.css";
import PaymentTable from "../components/Payment/PaymentTable";
import PaymentForm from "../components/Payment/PaymentForm";
import PaymentModal from "../components/Payment/PaymentModal";

const initialPayments = [
  {
    id: 1,
    invoiceNo: "INV-101",
    customer: "Rahul Sharma",
    paymentDate: "2026-08-01",
    paymentMode: "Cash",
    amount: 450,
    status: "Pending",
  },
  {
    id: 2,
    invoiceNo: "INV-102",
    customer: "Aman Verma",
    paymentDate: "2026-08-02",
    paymentMode: "UPI",
    amount: 650,
    status: "Completed",
  },
];

const paymentModes = ["Cash", "UPI", "Card", "Net Banking"];

function Payments() {
  const [payments, setPayments] = useState(initialPayments);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);

  const openModal = () => {
    setEditingPayment(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingPayment(null);
    setIsModalOpen(false);
  };

  const handleSave = (payment) => {
    if (editingPayment) {
      setPayments((prev) => prev.map((item) => (item.id === editingPayment.id ? { ...item, ...payment } : item)));
    } else {
      setPayments((prev) => [{ ...payment, id: Date.now() }, ...prev]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setPayments((prev) => prev.filter((payment) => payment.id !== id));
  };

  const filteredPayments = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return payments;

    return payments.filter((payment) =>
      [payment.invoiceNo, payment.customer, payment.paymentMode, payment.status]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [payments, searchTerm]);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Payments</h1>
          <p>Payment history and transaction management</p>
        </div>

        <button type="button" className="add-btn" onClick={openModal}>
          + Add Payment
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search payments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <PaymentTable
          payments={filteredPayments}
          onEdit={(payment) => {
            setEditingPayment(payment);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={closeModal} title={editingPayment ? "Edit Payment" : "Add Payment"}>
        <PaymentForm initialValues={editingPayment} modes={paymentModes} onSave={handleSave} onCancel={closeModal} />
      </PaymentModal>
    </>
  );
}

export default Payments;