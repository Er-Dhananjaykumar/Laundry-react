function DeliveryTable({ records, onSelect, onStatusChange }) {
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
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} onClick={() => onSelect(record)}>
              <td>{record.customer}</td>
              <td>{record.address}</td>
              <td>{record.pickupDate}</td>
              <td>{record.deliveryDate}</td>
              <td>{record.rider}</td>
              <td>{record.status}</td>
              <td>
                <select
                  value={record.status}
                  onChange={(e) => onStatusChange(record.id, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Picked Up">Picked Up</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Delayed">Delayed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryTable;
