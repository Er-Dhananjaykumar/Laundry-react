function BookingFilter({ searchTerm, onSearchChange, filterStatus, onFilterChange }) {
  return (
    <div className="booking-toolbar">
      <input
        type="text"
        placeholder="Search bookings..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={filterStatus} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default BookingFilter;
