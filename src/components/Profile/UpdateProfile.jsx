function UpdateProfile({ profile, setProfile, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="settings-card" onSubmit={onSubmit}>
      <h3>Update Profile</h3>
      <div className="form-grid">
        <div>
          <label>Name</label>
          <input name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Role</label>
          <input name="role" value={profile.role} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label>Bio</label>
        <textarea name="bio" rows="3" value={profile.bio} onChange={handleChange} />
      </div>
      <button type="submit" className="primary-btn">Save Profile</button>
    </form>
  );
}

export default UpdateProfile;
