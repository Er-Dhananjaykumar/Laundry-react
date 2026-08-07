import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  category: "Wash",
  price: "",
  deliveryTime: "",
  status: "Active",
};

function ServiceForm({ initialValues, categories, onSave, onCancel }) {
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
    const trimmedName = formData.name.trim();
    const trimmedDelivery = formData.deliveryTime.trim();
    const priceValue = Number(formData.price);

    if (!trimmedName) nextErrors.name = "Service name is required";
    if (!formData.category) nextErrors.category = "Category is required";
    if (!Number.isFinite(priceValue) || priceValue <= 0) nextErrors.price = "Price must be greater than 0";
    if (!trimmedDelivery) nextErrors.deliveryTime = "Delivery time is required";
    if (!formData.status) nextErrors.status = "Status is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSave({
      ...formData,
      name: formData.name.trim(),
      category: formData.category,
      price: Number(formData.price),
      deliveryTime: formData.deliveryTime.trim(),
      status: formData.status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <div className="form-grid">
        <div>
          <input name="name" placeholder="Service Name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div>
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <span className="form-error">{errors.category}</span>}
        </div>

        <div>
          <input name="price" type="number" min="1" placeholder="Price" value={formData.price} onChange={handleChange} />
          {errors.price && <span className="form-error">{errors.price}</span>}
        </div>

        <div>
          <input name="deliveryTime" placeholder="Delivery Time" value={formData.deliveryTime} onChange={handleChange} />
          {errors.deliveryTime && <span className="form-error">{errors.deliveryTime}</span>}
        </div>

        <div>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {errors.status && <span className="form-error">{errors.status}</span>}
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="save-btn">
          Save Service
        </button>
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ServiceForm;
