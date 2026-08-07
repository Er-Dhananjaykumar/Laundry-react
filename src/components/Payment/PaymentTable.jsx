function PaymentTable({ payments, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Customer</th>
            <th>Payment Date</th>
            <th>Payment Mode</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.invoiceNo}</td>
              <td>{payment.customer}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.paymentMode}</td>
              <td>₹ {payment.amount}</td>
              <td>{payment.status}</td>
              <td>
                <button type="button" className="action-btn edit-btn" onClick={() => onEdit(payment)}>
                  Edit
                </button>
                <button type="button" className="action-btn delete-btn" onClick={() => onDelete(payment.id)}>
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

export default PaymentTable;
