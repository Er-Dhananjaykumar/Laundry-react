function SalesReport({ data }) {
  return (
    <div>
      <h3>Sales Overview</h3>
      <div className="table-wrapper">
        <table className="report-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Sales</th>
              <th>Bookings</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.month}>
                <td>{item.month}</td>
                <td>₹{item.sales.toLocaleString()}</td>
                <td>{item.bookings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesReport;
