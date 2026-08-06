import "./Dashboard.css";

const DEFAULT_BOOKINGS = [
  {
    id: 1001,
    customer: "Rahul",
    date: "07-Jul-2026",
    status: "Pending",
    amount: 450,
  },
  {
    id: 1002,
    customer: "Aman",
    date: "07-Jul-2026",
    status: "Completed",
    amount: 650,
  },
  {
    id: 1003,
    customer: "Vikas",
    date: "07-Jul-2026",
    status: "Pending",
    amount: 550,
  },
  {
    id: 1004,
    customer: "Rohit",
    date: "07-Jul-2026",
    status: "Completed",
    amount: 700,
  },
];

const TABLE_HEADERS = ["Booking ID", "Customer", "Date", "Status", "Amount"];

function formatAmount(amount) {
  return `₹ ${amount}`;
}

function BookingTable({ bookings = DEFAULT_BOOKINGS }) {
  return (
    <div className="table-card">
      <h2>Recent Bookings</h2>

      <table>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {bookings.map(({ id, customer, date, status, amount }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{customer}</td>
              <td>{date}</td>
              <td>{status}</td>
              <td>{formatAmount(amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;