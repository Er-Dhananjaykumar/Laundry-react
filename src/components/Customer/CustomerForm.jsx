import { useState } from "react";

function CustomerForm({ onSave }) {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (!name || !mobile || !email) {
            alert("Please fill all fields");
            return;
        }

        onSave({
            id: Date.now(),
            name,
            mobile,
            email,
            status: "Active"
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

            <button type="submit">
                Save Customer
            </button>

        </form>
    );
}

export default CustomerForm;