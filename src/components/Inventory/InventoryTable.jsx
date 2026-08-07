function InventoryTable({ inventory, onStockUpdate }) {
  return (
    <div className="table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Vendor</th>
            <th>Purchase Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.vendor}</td>
              <td>₹{item.purchasePrice}</td>
              <td>{item.quantity <= 5 ? "Low Stock" : "In Stock"}</td>
              <td>
                <button type="button" className="secondary-btn" onClick={() => onStockUpdate(item.id, item.quantity + 5)}>+ Add Stock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
