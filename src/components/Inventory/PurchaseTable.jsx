function PurchaseTable({ purchases }) {
  return (
    <div className="table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Vendor</th>
            <th>Quantity</th>
            <th>Purchase Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.productName}</td>
              <td>{purchase.vendor}</td>
              <td>{purchase.quantity}</td>
              <td>₹{purchase.purchasePrice}</td>
              <td>{purchase.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseTable;
