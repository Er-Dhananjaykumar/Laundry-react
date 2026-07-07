import "./Dashboard.css";

function BookingTable() {

    const bookings = [
        {
            id: 1001,
            customer: "Rahul",
            date:"07-Jul-2026",
            status: "Pending",
            amount: 450
        },
        {
            id: 1002,
            customer: "Aman",
            date:"07-Jul-2026",
            status: "Completed",
            amount: 650
        },
        {
            id: 1003,
            customer: "Vikas",
            date:"07-Jul-2026",
            status: "Pending",
            amount: 550
        },
        {
            id: 1004,
            customer: "Rohit",
            date:"07-Jul-2026",
            status: "Completed",
            amount: 700
        }
    ];

    return (

        <div className="table-card">

            <h2>Recent Bookings</h2>

            <table>

                <thead>

                    <tr>

                        <th>Booking ID</th>

                        <th>Customer</th>
                        <th>Date</th>

                        <th>Status</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {bookings.map((booking) => (

                        <tr key={booking.id}>

                            <td>{booking.id}</td>
                            <td>{booking.customer}</td>
                            <td>{booking.date}</td>

                            <td>{booking.status}</td>

                            <td>₹ {booking.amount}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default BookingTable;