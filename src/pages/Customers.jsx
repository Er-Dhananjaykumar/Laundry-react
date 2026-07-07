import { useState } from "react";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomerForm from "../components/Customer/CustomerForm";

function Customers() {

  const [customers, setCustomers] = useState([
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
    }
]);


function addCustomer(customer) {

    setCustomers((prevCustomers) => [

        ...prevCustomers,

        customer

    ]);

}

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

<CustomerForm onSave={addCustomer} />

<CustomerTable customers={customers} />
    </>
  );
}

export default Customers;