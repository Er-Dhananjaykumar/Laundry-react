import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  quantity: 1,
  service: "Wash",
  price: "",
  discount: 0,
};

function ItemForm({ initialValues, supportedItems, services, onSave, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormData({ ...initialFormState, ...initialValues });
    } else {
      setFormData(initialFormState);
    }
    setErrors({});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name) nextErrors.name = "Item name is required";
    if (!formData.service) nextErrors.service = "Service is required";
    if (!Number(formData.price) || Number(formData.price) <= 0) nextErrors.price = "Price must be greater than 0";
    if (!Number(formData.quantity) || Number(formData.quantity) <= 0) nextErrors.quantity = "Quantity must be greater than 0";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const price = Number(formData.price);
    const quantity = Number(formData.quantity);
    const discount = Number(formData.discount || 0);
    const subtotal = price * quantity - discount;

    onSave({
      ...formData,
      quantity,
      price,
      discount,
      subtotal: subtotal > 0 ? subtotal : 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="form-grid">
        <div>
          <select name="name" value={formData.name} onChange={handleChange}>
            <option value="">Select Item</option>
            {supportedItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div>
          <input name="quantity" type="number" min="1" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
          {errors.quantity && <span className="form-error">{errors.quantity}</span>}
        </div>

        <div>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <span className="form-error">{errors.service}</span>}
        </div>

        <div>
          <input name="price" type="number" min="1" placeholder="Price" value={formData.price} onChange={handleChange} />
          {errors.price && <span className="form-error">{errors.price}</span>}
        </div>

        <div>
          <input name="discount" type="number" min="0" placeholder="Discount" value={formData.discount} onChange={handleChange} />
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="save-btn">Add Item</button>
        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default ItemForm;
