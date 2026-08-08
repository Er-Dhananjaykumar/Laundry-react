import { useMemo, useState } from "react";
import "../styles/notifications.css";
import SmsHistory from "../components/Notifications/SmsHistory";
import EmailHistory from "../components/Notifications/EmailHistory";
import NotificationForm from "../components/Notifications/NotificationForm";

const initialSms = [
  { id: 1, recipient: "+91 98765 43210", message: "Pickup scheduled for tomorrow", status: "Sent" },
  { id: 2, recipient: "+91 91234 56780", message: "Your order is ready for delivery", status: "Delivered" }
];

const initialEmail = [
  { id: 1, recipient: "rahul@example.com", subject: "Laundry Service Reminder", status: "Sent" },
  { id: 2, recipient: "priya@example.com", subject: "Invoice Available", status: "Pending" }
];

function Notifications() {
  const [smsHistory, setSmsHistory] = useState(initialSms);
  const [emailHistory, setEmailHistory] = useState(initialEmail);
  const [channel, setChannel] = useState("SMS");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSms = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return smsHistory;
    return smsHistory.filter((item) => [item.recipient, item.message, item.status].join(" ").toLowerCase().includes(query));
  }, [smsHistory, searchTerm]);

  const filteredEmail = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return emailHistory;
    return emailHistory.filter((item) => [item.recipient, item.subject, item.status].join(" ").toLowerCase().includes(query));
  }, [emailHistory, searchTerm]);

  const handleSend = (formData) => {
    if (channel === "SMS") {
      setSmsHistory((prev) => [{ id: Date.now(), recipient: formData.recipient, message: formData.message, status: "Sent" }, ...prev]);
    } else {
      setEmailHistory((prev) => [{ id: Date.now(), recipient: formData.recipient, subject: formData.message, status: "Sent" }, ...prev]);
    }
  };

  return (
    <div className="notifications-page">
      <div className="page-header">
        <div>
          <h1>Notification Center</h1>
          <p>Send and track SMS, Email, and WhatsApp communication.</p>
        </div>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search recipient, message, or status"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={channel} onChange={(e) => setChannel(e.target.value)}>
          <option value="SMS">SMS</option>
          <option value="Email">Email</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      <div className="card-panel">
        <NotificationForm channel={channel} onSend={handleSend} />
      </div>

      <div className="notification-grid">
        <div className="card-panel">
          <SmsHistory sms={filteredSms} />
        </div>
        <div className="card-panel">
          <EmailHistory emails={filteredEmail} />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
