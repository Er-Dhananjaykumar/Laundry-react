function BookingTable({ bookings, onEdit, onDelete, currentPage, totalPages, onPageChange }) {
  return (
    <div className="table-wrapper">
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking #</th>
            <th>Customer</th>
            <th>Booking Date</th>
            <th>Delivery Date</th>
            <th>Status</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.bookingNumber}</td>
              <td>{booking.customer}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.deliveryDate}</td>
              <td>{booking.status}</td>
              <td>{booking.items}</td>
              <td>₹ {booking.amount}</td>
              <td>{booking.paymentStatus}</td>
              <td>
                <button type="button" className="action-btn edit-btn" onClick={() => onEdit(booking)}>
                  Edit
                </button>
                <button type="button" className="action-btn delete-btn" onClick={() => onDelete(booking.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button type="button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button type="button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default BookingTable;
