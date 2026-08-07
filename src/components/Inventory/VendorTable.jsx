function VendorTable({ vendors }) {
  return (
    <div className="table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.vendorName}</td>
              <td>{vendor.contact}</td>
              <td>{vendor.address}</td>
              <td>{vendor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorTable;
