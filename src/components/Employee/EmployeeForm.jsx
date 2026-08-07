import { useEffect, useState } from "react";

const emptyForm = {
  employeeName: "",
  mobile: "",
  role: "Staff",
  salary: "",
  joiningDate: "",
  status: "Active"
};

function EmployeeForm({ initialValues, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormData({ ...emptyForm, ...initialValues });
    } else {
      setFormData(emptyForm);
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
    if (!formData.employeeName.trim()) nextErrors.employeeName = "Employee name is required";
    if (!/^[0-9]{10}$/.test(formData.mobile)) nextErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.role.trim()) nextErrors.role = "Role is required";
    if (!Number(formData.salary) || Number(formData.salary) <= 0) nextErrors.salary = "Salary must be greater than 0";
    if (!formData.joiningDate) nextErrors.joiningDate = "Joining date is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...formData,
      employeeName: formData.employeeName.trim(),
      role: formData.role.trim(),
      salary: Number(formData.salary)
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div>
          <label>Employee Name</label>
          <input name="employeeName" value={formData.employeeName} onChange={handleChange} />
          {errors.employeeName && <span className="form-error">{errors.employeeName}</span>}
        </div>

        <div>
          <label>Mobile</label>
          <input name="mobile" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <span className="form-error">{errors.mobile}</span>}
        </div>

        <div>
          <label>Role</label>
          <input name="role" value={formData.role} onChange={handleChange} />
          {errors.role && <span className="form-error">{errors.role}</span>}
        </div>

        <div>
          <label>Salary</label>
          <input name="salary" type="number" min="1" value={formData.salary} onChange={handleChange} />
          {errors.salary && <span className="form-error">{errors.salary}</span>}
        </div>

        <div>
          <label>Joining Date</label>
          <input name="joiningDate" type="date" value={formData.joiningDate} onChange={handleChange} />
          {errors.joiningDate && <span className="form-error">{errors.joiningDate}</span>}
        </div>

        <div>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-btn">Save Employee</button>
        <button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EmployeeForm;
