function InvoiceSummary({ totals, invoice, thermalMode }) {
  return (
    <div className="invoice-summary">
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>₹{totals.subtotal}</strong>
      </div>

      <div className="summary-row">
        <span>GST</span>
        <strong>₹{totals.gstAmount.toFixed(2)}</strong>
      </div>

      <div className="summary-row total-row">
        <span>Total Due</span>
        <strong>₹{totals.total.toFixed(2)}</strong>
      </div>

      <div className="gst-block">
        <h4>GST Details</h4>
        <p>CGST @ 9%: ₹{(totals.gstAmount / 2).toFixed(2)}</p>
        <p>SGST @ 9%: ₹{(totals.gstAmount / 2).toFixed(2)}</p>
      </div>

      <div className="notes-block">
        <h4>Notes</h4>
        <p>{invoice.notes}</p>
      </div>

      {!thermalMode && <div className="signature">Authorized Signature</div>}
    </div>
  );
}

export default InvoiceSummary;
