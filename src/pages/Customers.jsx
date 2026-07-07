import { useState } from "react";
import CustomerTable from "../components/Customer/CustomerTable";

function Customers() {

  const [customers] = useState([

    {
      id: 1,
      name: "Rahul",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Aman",
      mobile: "9123456780",
      email: "aman@gmail.com",
      status: "Active"
    },
    {
      id: 3,
      name: "Neha",
      mobile: "9988776655",
      email: "neha@gmail.com",
      status: "Inactive"
    }

  ]);

  return (
    <>
      <h1>Customers</h1>
      <div className="customer-toolbar">

        <input
          type="text"
          placeholder="Search Customer..."
        />

        <button>
          + Add Customer
        </button>

      </div>
      <CustomerTable customers={customers} />
    </>
  );
}

export default Customers;