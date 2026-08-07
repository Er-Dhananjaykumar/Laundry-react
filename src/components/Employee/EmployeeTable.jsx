function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeName}</td>
              <td>{employee.mobile}</td>
              <td>{employee.role}</td>
              <td>₹{employee.salary}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.status}</td>
              <td>
                <button type="button" className="secondary-btn" onClick={() => onEdit(employee)}>Edit</button>
                <button type="button" className="danger-btn" onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
