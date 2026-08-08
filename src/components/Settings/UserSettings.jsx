function UserSettings() {
  return (
    <div className="settings-card">
      <h3>User Preferences</h3>
      <div className="form-grid">
        <div>
          <label>Admin Name</label>
          <input defaultValue="Admin User" />
        </div>
        <div>
          <label>Security PIN</label>
          <input type="password" defaultValue="1234" />
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
