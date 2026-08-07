function ServiceTable({ services, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="service-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Delivery Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.category}</td>
              <td>₹ {service.price}</td>
              <td>{service.deliveryTime}</td>
              <td>{service.status}</td>
              <td>
                <button type="button" className="action-btn edit-btn" onClick={() => onEdit(service)}>
                  Edit
                </button>
                <button type="button" className="action-btn delete-btn" onClick={() => onDelete(service.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;
