import { useState } from "react";

function NotificationForm({ channel, onSend }) {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient.trim() || !message.trim()) return;

    onSend({ recipient, message });
    setRecipient("");
    setMessage("");
  };

  return (
    <form className="notification-form" onSubmit={handleSubmit}>
      <h3>Send {channel}</h3>
      <label>Recipient</label>
      <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder={channel === "Email" ? "email@example.com" : "phone or contact"} />
      <label>Message</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder={`Type your ${channel.toLowerCase()} message`} />
      <button type="submit" className="primary-btn">Send</button>
    </form>
  );
}

export default NotificationForm;
