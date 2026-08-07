import { useMemo, useState } from "react";
import "../styles/items.css";
import ItemTable from "../components/Item/ItemTable";
import ItemModal from "../components/Item/ItemModal";
import ItemForm from "../components/Item/ItemForm";

const supportedItems = ["Shirt", "Pant", "Suit", "Blazer", "Blanket", "Curtain", "Carpet", "Shoes", "Saree"];
const services = ["Wash", "Iron", "Dry Clean", "Steam Press", "Carpet Wash", "Blanket Wash", "Shoe Cleaning", "Curtain Cleaning"];

const initialItems = [
  {
    id: 1,
    name: "Shirt",
    quantity: 2,
    service: "Wash",
    price: 80,
    discount: 10,
    subtotal: 150,
  },
  {
    id: 2,
    name: "Suit",
    quantity: 1,
    service: "Dry Clean",
    price: 180,
    discount: 20,
    subtotal: 160,
  },
];

function Items() {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddItem = (item) => {
    setItems((prev) => [{ ...item, id: Date.now() }, ...prev]);
    closeModal();
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const price = Number(item.price);
        const discount = Number(item.discount || 0);
        const subtotal = price * quantity - discount;
        return { ...item, quantity, subtotal: subtotal > 0 ? subtotal : 0 };
      })
    );
  };

  const totalAmount = useMemo(() => items.reduce((sum, item) => sum + item.subtotal, 0), [items]);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Order Items</h1>
          <p>Manage laundry order items and totals</p>
        </div>

        <button type="button" className="add-btn" onClick={openModal}>
          + Add Item
        </button>
      </div>

      <div className="card-panel">
        <ItemTable items={items} onDelete={handleDelete} onQuantityChange={handleQuantityChange} />
      </div>

      <div className="summary-card">
        <h3>Total Amount</h3>
        <h3>₹ {totalAmount}</h3>
      </div>

      <ItemModal isOpen={isModalOpen} onClose={closeModal} title="Add Item">
        <ItemForm supportedItems={supportedItems} services={services} onSave={handleAddItem} onCancel={closeModal} />
      </ItemModal>
    </>
  );
}

export default Items;
