import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  status: "Active",
};

function CustomerForm({ initialValues, onSave, onCancel }) {
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
    const trimmedData = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      pincode: formData.pincode.trim(),
      status: formData.status.trim(),
    };

    if (!trimmedData.name) nextErrors.name = "Customer name is required";
    if (!trimmedData.mobile) nextErrors.mobile = "Mobile number is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) nextErrors.email = "Valid email is required";
    if (!trimmedData.address) nextErrors.address = "Address is required";
    if (!trimmedData.city) nextErrors.city = "City is required";
    if (!/^\d{6}$/.test(trimmedData.pincode)) nextErrors.pincode = "Pincode must be 6 digits";
    if (!trimmedData.status) nextErrors.status = "Status is required";

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
      mobile: formData.mobile.trim(),
      email: formData.email.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      pincode: formData.pincode.trim(),
      status: formData.status.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <div className="form-grid">
        <div>
          <input name="name" placeholder="Customer Name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div>
          <input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <span className="form-error">{errors.mobile}</span>}
        </div>

        <div>
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div>
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="form-error">{errors.address}</span>}
        </div>

        <div>
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          {errors.city && <span className="form-error">{errors.city}</span>}
        </div>

        <div>
          <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <span className="form-error">{errors.pincode}</span>}
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
          Save Customer
        </button>

        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CustomerForm;