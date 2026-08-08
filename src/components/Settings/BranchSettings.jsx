function BranchSettings() {
  return (
    <div className="settings-card">
      <h3>Branch Settings</h3>
      <div className="form-grid">
        <div>
          <label>Branch Name</label>
          <input defaultValue="Main Branch" />
        </div>
        <div>
          <label>Branch Address</label>
          <input defaultValue="42 Market Street, New Delhi" />
        </div>
      </div>
    </div>
  );
}

export default BranchSettings;
