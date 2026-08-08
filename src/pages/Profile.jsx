import { useState } from "react";
import "../styles/profile.css";
import ProfileCard from "../components/Profile/ProfileCard";
import UpdateProfile from "../components/Profile/UpdateProfile";
import ChangePassword from "../components/Profile/ChangePassword";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@freshlaundryhub.com",
    phone: "+91 98765 43210",
    role: "Administrator",
    bio: "Managing laundry operations and reporting."
  });

  const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [avatar, setAvatar] = useState("AU");

  const handleProfileSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully");
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password changed successfully");
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h1>Profile</h1>
          <p>Manage your account details, credentials, and activity.</p>
        </div>
      </div>

      <div className="profile-grid">
        <ProfileCard profile={profile} avatar={avatar} setAvatar={setAvatar} />
        <UpdateProfile profile={profile} setProfile={setProfile} onSubmit={handleProfileSave} />
      </div>

      <div className="profile-grid lower-grid">
        <ChangePassword passwords={passwords} setPasswords={setPasswords} onSubmit={handlePasswordSave} />
        <div className="settings-card">
          <h3>Activity Log</h3>
          <ul className="activity-list">
            <li>Updated company settings - Today</li>
            <li>Sent invoice reminder - Yesterday</li>
            <li>Changed delivery status - 2 days ago</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
