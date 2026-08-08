import { useState } from "react";
import "../styles/settings.css";
import CompanySettings from "../components/Settings/CompanySettings";
import UserSettings from "../components/Settings/UserSettings";
import TaxSettings from "../components/Settings/TaxSettings";
import PrinterSettings from "../components/Settings/PrinterSettings";
import BranchSettings from "../components/Settings/BranchSettings";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [companyData, setCompanyData] = useState({
    companyName: "Fresh Laundry Hub",
    email: "billing@freshlaundryhub.com",
    phone: "+91 98765 43210",
    address: "42 Market Street, New Delhi",
    gst: "07AABCF1234M1Z5",
    logo: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!companyData.companyName.trim()) nextErrors.companyName = "Company name is required";
    if (!companyData.email.includes("@")) nextErrors.email = "Enter a valid email";
    if (!companyData.phone.trim()) nextErrors.phone = "Phone is required";
    if (!companyData.gst.trim()) nextErrors.gst = "GST is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Settings saved successfully");
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : ""}`}>
      <div className="page-header">
        <div>
          <h1>System Settings</h1>
          <p>Manage company profile, branches, tax, printer, and preferences.</p>
        </div>
        <button type="button" className="theme-btn" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <form className="settings-form" onSubmit={handleSave}>
        <CompanySettings companyData={companyData} setCompanyData={setCompanyData} errors={errors} />
        <UserSettings />
        <TaxSettings />
        <PrinterSettings />
        <BranchSettings />
        <div className="form-actions">
          <button type="submit" className="primary-btn">Save Settings</button>
        </div>
      </form>
    </div>
  );
}

export default Settings;