import { useMemo, useState } from "react";
import "../styles/invoices.css";
import InvoicePreview from "../components/Invoice/InvoicePreview";

const invoiceData = {
  invoiceNumber: "INV-2026-081",
  date: "2026-08-07",
  dueDate: "2026-08-14",
  company: {
    name: "Fresh Laundry Hub",
    address: "42 Market Street, New Delhi",
    phone: "+91 98765 43210",
    email: "billing@freshlaundryhub.com",
    gstNo: "07AABCF1234M1Z5"
  },
  customer: {
    name: "Aarav Sharma",
    address: "House 12, Sector 15, Noida",
    phone: "+91 99999 88888"
  },
  items: [
    { name: "Wash & Fold", qty: 3, rate: 120, gst: 18 },
    { name: "Dry Cleaning", qty: 2, rate: 220, gst: 18 },
    { name: "Ironing", qty: 4, rate: 60, gst: 12 }
  ],
  notes: "Payment due within 7 days. Thank you for choosing Fresh Laundry Hub."
};

function Invoices() {
  const [thermalMode, setThermalMode] = useState(false);

  const totals = useMemo(() => {
    const subtotal = invoiceData.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
    const gstAmount = invoiceData.items.reduce((sum, item) => sum + (item.qty * item.rate * item.gst) / 100, 0);
    const total = subtotal + gstAmount;

    return { subtotal, gstAmount, total };
  }, []);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;

    const printStyles = `
      body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: white; color: #111827; }
      .invoice-preview { max-width: 820px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; }
      .invoice-header { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 16px; margin-bottom: 20px; }
      .invoice-items table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
      .invoice-items th, .invoice-items td { padding: 8px 10px; border-bottom: 1px solid #e5e7eb; text-align: left; }
      .invoice-summary { display: flex; flex-direction: column; gap: 8px; border-top: 1px dashed #cbd5e1; padding-top: 12px; }
      .summary-row { display: flex; justify-content: space-between; }
      .total-row { font-size: 1.05rem; }
      .gst-block, .notes-block { margin-top: 8px; }
      .signature { margin-top: 16px; text-align: right; font-weight: 600; }
      .thermal-layout { font-family: 'Courier New', monospace; font-size: 13px; border: 2px dashed #111827; }
    `;

    printWindow.document.write(`<!DOCTYPE html><html><head><title>Invoice</title><style>${printStyles}</style></head><body>${document.getElementById("invoice-print-root")?.innerHTML || ""}</body></html>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleDownloadPdf = () => {
    handlePrint();
  };

  return (
    <div className="invoice-page">
      <div className="page-header">
        <div>
          <h1>Invoice</h1>
          <p>Create and share a polished invoice with print-ready layout.</p>
        </div>

        <div className="invoice-actions">
          <button type="button" className="secondary-btn" onClick={() => setThermalMode((prev) => !prev)}>
            {thermalMode ? "Switch to Professional" : "Switch to Thermal"}
          </button>
          <button type="button" className="secondary-btn" onClick={handlePrint}>
            Print
          </button>
          <button type="button" className="primary-btn" onClick={handleDownloadPdf}>
            Download PDF
          </button>
        </div>
      </div>

      <div className="card-panel invoice-shell">
        <InvoicePreview invoice={invoiceData} totals={totals} thermalMode={thermalMode} />
      </div>
    </div>
  );
}

export default Invoices;
