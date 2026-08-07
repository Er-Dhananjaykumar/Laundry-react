function InvoiceHeader({ invoice, thermalMode }) {
  return (
    <div className="invoice-header">
      <div className="brand-block">
        <h2>{invoice.company.name}</h2>
        <p>{invoice.company.address}</p>
        <p>Phone: {invoice.company.phone}</p>
        <p>Email: {invoice.company.email}</p>
        <p>GST No: {invoice.company.gstNo}</p>
      </div>

      <div className="invoice-meta">
        <h3>{thermalMode ? "Tax Invoice" : "Professional Invoice"}</h3>
        <p><strong>Invoice #:</strong> {invoice.invoiceNumber}</p>
        <p><strong>Date:</strong> {invoice.date}</p>
        <p><strong>Due Date:</strong> {invoice.dueDate}</p>
      </div>

      <div className="customer-block">
        <h4>Bill To</h4>
        <p>{invoice.customer.name}</p>
        <p>{invoice.customer.address}</p>
        <p>{invoice.customer.phone}</p>
      </div>
    </div>
  );
}

export default InvoiceHeader;
