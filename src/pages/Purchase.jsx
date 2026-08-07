import { useMemo, useState } from "react";
import "../styles/inventory.css";
import PurchaseTable from "../components/Inventory/PurchaseTable";

const initialPurchases = [
  { id: 1, productName: "Detergent Powder", vendor: "Aqua Supplies", quantity: 30, purchasePrice: 180, date: "2026-08-01" },
  { id: 2, productName: "Fabric Softener", vendor: "Fresh Traders", quantity: 10, purchasePrice: 220, date: "2026-08-03" }
];

function Purchase() {
  const [purchases, setPurchases] = useState(initialPurchases);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPurchases = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return purchases;

    return purchases.filter((purchase) =>
      [purchase.productName, purchase.vendor, purchase.date]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [purchases, searchTerm]);

  return (
    <div className="inventory-page">
      <div className="page-header">
        <div>
          <h1>Purchase Management</h1>
          <p>Review recent purchases and supplier records.</p>
        </div>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search purchases"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <PurchaseTable purchases={filteredPurchases} />
      </div>
    </div>
  );
}

export default Purchase;
