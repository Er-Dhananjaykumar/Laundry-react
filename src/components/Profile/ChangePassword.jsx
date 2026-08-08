function ChangePassword({ passwords, setPasswords, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="settings-card" onSubmit={onSubmit}>
      <h3>Change Password</h3>
      <div className="form-grid">
        <div>
          <label>Current Password</label>
          <input type="password" name="currentPassword" value={passwords.currentPassword} onChange={handleChange} />
        </div>
        <div>
          <label>New Password</label>
          <input type="password" name="newPassword" value={passwords.newPassword} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={passwords.confirmPassword} onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="primary-btn">Change Password</button>
    </form>
  );
}

export default ChangePassword;
