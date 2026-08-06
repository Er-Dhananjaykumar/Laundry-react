function CustomerTable({ customers }) {
  return (
    <table className="customer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {customers.map(({ id, name, mobile, email, status }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{status}</td>
            <td>
              <button type="button" className="action-btn edit-btn">
                Edit
              </button>
              <button type="button" className="action-btn delete-btn">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;