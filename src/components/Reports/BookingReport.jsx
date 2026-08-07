function BookingReport({ bookings }) {
  return (
    <div>
      <h3>Recent Bookings</h3>
      <div className="table-wrapper">
        <table className="report-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.customer}</td>
                <td>{booking.service}</td>
                <td>₹{booking.amount}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingReport;
