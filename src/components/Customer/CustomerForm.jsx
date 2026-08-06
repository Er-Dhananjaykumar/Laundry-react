import { useState } from "react";

function CustomerForm({ onSave, onCancel }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMobile = mobile.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedMobile || !trimmedEmail) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      id: Date.now(),
      name: trimmedName,
      mobile: trimmedMobile,
      email: trimmedEmail,
      status: "Active",
    });

    setName("");
    setMobile("");
    setEmail("");
  }

    return (
        <form onSubmit={handleSubmit} className="customer-form">

            <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="form-buttons">

                <button
                    type="submit"
                    className="save-btn"
                >
                    Save Customer
                </button>

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={onCancel}
                >
                    Cancel
                </button>

            </div>

        </form>
    );
}

export default CustomerForm;