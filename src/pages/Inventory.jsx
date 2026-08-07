import { useMemo, useState } from "react";
import "../styles/inventory.css";
import InventoryTable from "../components/Inventory/InventoryTable";

const initialInventory = [
  { id: 1, productName: "Detergent Powder", quantity: 24, vendor: "Aqua Supplies", purchasePrice: 180, stock: "In Stock" },
  { id: 2, productName: "Fabric Softener", quantity: 4, vendor: "Fresh Traders", purchasePrice: 220, stock: "Low Stock" },
  { id: 3, productName: "Laundry Bags", quantity: 50, vendor: "Metro Goods", purchasePrice: 90, stock: "In Stock" }
];

function Inventory() {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return inventory;

    return inventory.filter((item) =>
      [item.productName, item.vendor, item.stock]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [inventory, searchTerm]);

  const handleStockUpdate = (id, quantity) => {
    setInventory((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  return (
    <div className="inventory-page">
      <div className="page-header">
        <div>
          <h1>Inventory Management</h1>
          <p>Track stock levels, vendor items, and purchase details.</p>
        </div>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search by product or vendor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <InventoryTable inventory={filteredInventory} onStockUpdate={handleStockUpdate} />
      </div>
    </div>
  );
}

export default Inventory;
