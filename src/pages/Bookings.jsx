import { useMemo, useState } from "react";
import "../styles/bookings.css";
import BookingTable from "../components/Booking/BookingTable";
import BookingForm from "../components/Booking/BookingForm";
import BookingModal from "../components/Booking/BookingModal";
import BookingFilter from "../components/Booking/BookingFilter";

const initialBookings = [
  {
    id: 1,
    bookingNumber: "BK-1001",
    customer: "Rahul Sharma",
    bookingDate: "2026-08-01",
    deliveryDate: "2026-08-03",
    status: "Pending",
    items: "2 Shirts, 1 Pant",
    amount: 450,
    paymentStatus: "Pending",
  },
  {
    id: 2,
    bookingNumber: "BK-1002",
    customer: "Aman Verma",
    bookingDate: "2026-08-02",
    deliveryDate: "2026-08-04",
    status: "In Progress",
    items: "1 Suit",
    amount: 650,
    paymentStatus: "Paid",
  },
  {
    id: 3,
    bookingNumber: "BK-1003",
    customer: "Vikas Rao",
    bookingDate: "2026-08-03",
    deliveryDate: "2026-08-05",
    status: "Completed",
    items: "3 Bedsheets",
    amount: 300,
    paymentStatus: "Paid",
  },
];

const pageSize = 2;

function Bookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = () => {
    setEditingBooking(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingBooking(null);
    setIsModalOpen(false);
  };

  const handleSave = (booking) => {
    if (editingBooking) {
      setBookings((prev) => prev.map((item) => (item.id === editingBooking.id ? { ...item, ...booking } : item)));
    } else {
      setBookings((prev) => [{ ...booking, id: Date.now() }, ...prev]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };

  const filteredBookings = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesSearch =
        !query ||
        [booking.bookingNumber, booking.customer, booking.status, booking.paymentStatus]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesStatus = filterStatus === "All" || booking.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [bookings, searchTerm, filterStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredBookings.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedBookings = filteredBookings.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Bookings</h1>
          <p>Manage laundry bookings and deliveries</p>
        </div>

        <button type="button" className="add-btn" onClick={openModal}>
          + Create Booking
        </button>
      </div>

      <BookingFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />

      <div className="card-panel">
        <BookingTable
          bookings={paginatedBookings}
          onEdit={(booking) => {
            setEditingBooking(booking);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} title={editingBooking ? "Edit Booking" : "Create Booking"}>
        <BookingForm initialValues={editingBooking} onSave={handleSave} onCancel={closeModal} />
      </BookingModal>
    </>
  );
}

export default Bookings;