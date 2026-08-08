function PrinterSettings() {
  return (
    <div className="settings-card">
      <h3>Printer Settings</h3>
      <div className="form-grid">
        <div>
          <label>Printer Name</label>
          <input defaultValue="Thermal Printer" />
        </div>
        <div>
          <label>Print Paper Size</label>
          <select defaultValue="80mm">
            <option value="80mm">80mm</option>
            <option value="A4">A4</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PrinterSettings;
