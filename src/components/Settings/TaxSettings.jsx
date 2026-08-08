function TaxSettings() {
  return (
    <div className="settings-card">
      <h3>Tax Settings</h3>
      <div className="form-grid">
        <div>
          <label>GST %</label>
          <input type="number" defaultValue="18" />
        </div>
        <div>
          <label>Tax Mode</label>
          <select defaultValue="Inclusive">
            <option value="Inclusive">Inclusive</option>
            <option value="Exclusive">Exclusive</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TaxSettings;
