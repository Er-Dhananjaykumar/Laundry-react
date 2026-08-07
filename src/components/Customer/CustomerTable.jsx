function CustomerTable({ customers, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => {
            const { id, name, mobile, email, address, city, pincode, status } = customer;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{mobile}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{city}</td>
                <td>{pincode}</td>
                <td>{status}</td>
                <td>
                  <button type="button" className="action-btn edit-btn" onClick={() => onEdit(customer)}>
                    Edit
                  </button>
                  <button type="button" className="action-btn delete-btn" onClick={() => onDelete(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;