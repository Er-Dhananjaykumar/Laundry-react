import { useEffect, useState } from "react";

const initialFormState = {
  bookingNumber: "",
  customer: "",
  bookingDate: "",
  deliveryDate: "",
  status: "Pending",
  items: "",
  amount: "",
  paymentStatus: "Pending",
};

function BookingForm({ initialValues, onSave, onCancel }) {
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
    if (!formData.bookingNumber.trim()) nextErrors.bookingNumber = "Booking number is required";
    if (!formData.customer.trim()) nextErrors.customer = "Customer is required";
    if (!formData.bookingDate) nextErrors.bookingDate = "Booking date is required";
    if (!formData.deliveryDate) nextErrors.deliveryDate = "Delivery date is required";
    if (!formData.items.trim()) nextErrors.items = "Items are required";
    if (!Number(formData.amount) || Number(formData.amount) <= 0) nextErrors.amount = "Amount must be greater than 0";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...formData,
      bookingNumber: formData.bookingNumber.trim(),
      customer: formData.customer.trim(),
      bookingDate: formData.bookingDate,
      deliveryDate: formData.deliveryDate,
      items: formData.items.trim(),
      amount: Number(formData.amount),
      paymentStatus: formData.paymentStatus,
      status: formData.status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-grid">
        <div>
          <input name="bookingNumber" placeholder="Booking Number" value={formData.bookingNumber} onChange={handleChange} />
          {errors.bookingNumber && <span className="form-error">{errors.bookingNumber}</span>}
        </div>

        <div>
          <input name="customer" placeholder="Customer" value={formData.customer} onChange={handleChange} />
          {errors.customer && <span className="form-error">{errors.customer}</span>}
        </div>

        <div>
          <input name="bookingDate" type="date" value={formData.bookingDate} onChange={handleChange} />
          {errors.bookingDate && <span className="form-error">{errors.bookingDate}</span>}
        </div>

        <div>
          <input name="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} />
          {errors.deliveryDate && <span className="form-error">{errors.deliveryDate}</span>}
        </div>

        <div>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <div>
          <input name="items" placeholder="Items" value={formData.items} onChange={handleChange} />
          {errors.items && <span className="form-error">{errors.items}</span>}
        </div>

        <div>
          <input name="amount" type="number" min="1" placeholder="Amount" value={formData.amount} onChange={handleChange} />
          {errors.amount && <span className="form-error">{errors.amount}</span>}
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="save-btn">Save Booking</button>
        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default BookingForm;
