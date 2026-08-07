import { useMemo, useState } from "react";
import "../styles/employees.css";
import EmployeeTable from "../components/Employee/EmployeeTable";
import EmployeeForm from "../components/Employee/EmployeeForm";
import EmployeeModal from "../components/Employee/EmployeeModal";

const initialEmployees = [
  {
    id: 1,
    employeeName: "Arjun Singh",
    mobile: "9876543210",
    role: "Supervisor",
    salary: 32000,
    joiningDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    employeeName: "Meera Jain",
    mobile: "9123456780",
    role: "Cashier",
    salary: 24000,
    joiningDate: "2024-06-01",
    status: "Active"
  }
];

function Employees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return employees;

    return employees.filter((employee) =>
      [employee.employeeName, employee.mobile, employee.role, employee.status]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [employees, searchTerm]);

  const openModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(false);
  };

  const handleSave = (employee) => {
    if (editingEmployee) {
      setEmployees((prev) => prev.map((item) => (item.id === editingEmployee.id ? { ...item, ...employee } : item)));
    } else {
      setEmployees((prev) => [{ ...employee, id: Date.now() }, ...prev]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  };

  return (
    <div className="employees-page">
      <div className="page-header">
        <div>
          <h1>Employee Management</h1>
          <p>Maintain staff records, roles, salary details, and status.</p>
        </div>
        <button type="button" className="primary-btn" onClick={openModal}>+ Add Employee</button>
      </div>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search by name, role, mobile or status"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card-panel">
        <EmployeeTable
          employees={filteredEmployees}
          onEdit={(employee) => {
            setEditingEmployee(employee);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <EmployeeModal isOpen={isModalOpen} title={editingEmployee ? "Edit Employee" : "Add Employee"} onClose={closeModal}>
        <EmployeeForm initialValues={editingEmployee} onSave={handleSave} onCancel={closeModal} />
      </EmployeeModal>
    </div>
  );
}

export default Employees;
