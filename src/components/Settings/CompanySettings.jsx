function CompanySettings({ companyData, setCompanyData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="settings-card">
      <h3>Company Profile</h3>
      <div className="form-grid">
        <div>
          <label>Company Name</label>
          <input name="companyName" value={companyData.companyName} onChange={handleChange} />
          {errors.companyName && <span className="form-error">{errors.companyName}</span>}
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={companyData.email} onChange={handleChange} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" value={companyData.phone} onChange={handleChange} />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        <div>
          <label>GST</label>
          <input name="gst" value={companyData.gst} onChange={handleChange} />
          {errors.gst && <span className="form-error">{errors.gst}</span>}
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label>Address</label>
          <textarea name="address" rows="3" value={companyData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Logo Upload</label>
          <input type="file" onChange={(e) => setCompanyData((prev) => ({ ...prev, logo: e.target.files?.[0]?.name || "" }))} />
          {companyData.logo && <p className="helper-text">Selected: {companyData.logo}</p>}
        </div>
      </div>
    </div>
  );
}

export default CompanySettings;
