function CustomerSearch({ value, onChange, onAddClick }) {
  return (
    <div className="customer-toolbar">
      <input
        type="text"
        placeholder="Search Customer..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button type="button" onClick={onAddClick}>
        + Add Customer
      </button>
    </div>
  );
}

export default CustomerSearch;
