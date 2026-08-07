function PickupTable({ records, onAssign, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="pickup-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Address</th>
            <th>Pickup Date</th>
            <th>Delivery Date</th>
            <th>Rider</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.customer}</td>
              <td>{record.address}</td>
              <td>{record.pickupDate}</td>
              <td>{record.deliveryDate}</td>
              <td>{record.rider}</td>
              <td>{record.status}</td>
              <td>
                <button type="button" className="secondary-btn" onClick={() => onAssign(record)}>Assign Rider</button>
                <button type="button" className="danger-btn" onClick={() => onDelete(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PickupTable;
