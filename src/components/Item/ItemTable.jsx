function ItemTable({ items, onDelete, onQuantityChange }) {
  return (
    <div className="table-wrapper">
      <table className="item-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Service</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(item.id, Number(e.target.value))}
                />
              </td>
              <td>{item.service}</td>
              <td>₹ {item.price}</td>
              <td>₹ {item.discount}</td>
              <td>₹ {item.subtotal}</td>
              <td>
                <button type="button" className="action-btn delete-btn" onClick={() => onDelete(item.id)}>
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

export default ItemTable;
