function InvoiceItems({ items, thermalMode }) {
  return (
    <div className="invoice-items">
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={`${item.name}-${index}`}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>₹{item.rate}</td>
              <td>₹{item.qty * item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {thermalMode && <div className="thermal-note">Thermal layout • compact print-friendly view</div>}
    </div>
  );
}

export default InvoiceItems;
