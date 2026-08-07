import { useEffect, useState } from "react";

const initialFormState = {
  invoiceNo: "",
  customer: "",
  paymentDate: "",
  paymentMode: "Cash",
  amount: "",
  status: "Pending",
};

function PaymentForm({ initialValues, modes, onSave, onCancel }) {
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
    if (!formData.invoiceNo.trim()) nextErrors.invoiceNo = "Invoice number is required";
    if (!formData.customer.trim()) nextErrors.customer = "Customer is required";
    if (!formData.paymentDate) nextErrors.paymentDate = "Payment date is required";
    if (!Number(formData.amount) || Number(formData.amount) <= 0) nextErrors.amount = "Amount must be greater than 0";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...formData,
      invoiceNo: formData.invoiceNo.trim(),
      customer: formData.customer.trim(),
      amount: Number(formData.amount),
      paymentMode: formData.paymentMode,
      status: formData.status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-grid">
        <div>
          <input name="invoiceNo" placeholder="Invoice No" value={formData.invoiceNo} onChange={handleChange} />
          {errors.invoiceNo && <span className="form-error">{errors.invoiceNo}</span>}
        </div>

        <div>
          <input name="customer" placeholder="Customer" value={formData.customer} onChange={handleChange} />
          {errors.customer && <span className="form-error">{errors.customer}</span>}
        </div>

        <div>
          <input name="paymentDate" type="date" value={formData.paymentDate} onChange={handleChange} />
          {errors.paymentDate && <span className="form-error">{errors.paymentDate}</span>}
        </div>

        <div>
          <select name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
            {modes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input name="amount" type="number" min="1" placeholder="Amount" value={formData.amount} onChange={handleChange} />
          {errors.amount && <span className="form-error">{errors.amount}</span>}
        </div>

        <div>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" className="save-btn">Save Payment</button>
        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default PaymentForm;
