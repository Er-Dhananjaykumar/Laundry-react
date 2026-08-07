import InvoiceHeader from "./InvoiceHeader";
import InvoiceItems from "./InvoiceItems";
import InvoiceSummary from "./InvoiceSummary";

function InvoicePreview({ invoice, totals, thermalMode }) {
  const previewClass = thermalMode ? "invoice-preview thermal-layout" : "invoice-preview professional-layout";

  return (
    <div id="invoice-print-root" className={previewClass}>
      <InvoiceHeader invoice={invoice} thermalMode={thermalMode} />
      <InvoiceItems items={invoice.items} thermalMode={thermalMode} />
      <InvoiceSummary totals={totals} invoice={invoice} thermalMode={thermalMode} />
    </div>
  );
}

export default InvoicePreview;
