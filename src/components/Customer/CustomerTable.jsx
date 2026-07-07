function CustomerTable({ customers }) {

    return (

        <table className="customer-table">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {customers.map((customer) => (

                    <tr key={customer.id}>

                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.mobile}</td>
                        <td>{customer.email}</td>
                        <td>{customer.status}</td>

                        <td>

                            <button>Edit</button>

                            <button>Delete</button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default CustomerTable;