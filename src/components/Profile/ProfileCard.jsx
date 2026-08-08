function ProfileCard({ profile, avatar, setAvatar }) {
  return (
    <div className="settings-card profile-card">
      <div className="avatar-circle">{avatar}</div>
      <h3>{profile.name}</h3>
      <p>{profile.role}</p>
      <p>{profile.email}</p>
      <p>{profile.phone}</p>
      <button type="button" className="secondary-btn" onClick={() => setAvatar("A")}>Change Picture</button>
    </div>
  );
}

export default ProfileCard;
