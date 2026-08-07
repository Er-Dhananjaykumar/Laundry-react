function CustomerReport({ customers }) {
  return (
    <div>
      <h3>Customer Performance</h3>
      <div className="table-wrapper">
        <table className="report-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Visits</th>
              <th>Spend</th>
              <th>Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.visits}</td>
                <td>₹{customer.spend.toLocaleString()}</td>
                <td>{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerReport;
