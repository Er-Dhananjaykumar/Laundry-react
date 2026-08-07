function AssignRiderModal({ isOpen, riders, selectedRecord, onClose, onAssign }) {
  if (!isOpen || !selectedRecord) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Assign Rider</h3>
          <button type="button" className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><strong>{selectedRecord.customer}</strong></p>
          <p>{selectedRecord.address}</p>
          <select id="rider-select" defaultValue={selectedRecord.rider}>
            {riders.map((rider) => (
              <option key={rider} value={rider}>{rider}</option>
            ))}
          </select>
          <div className="modal-actions">
            <button type="button" className="primary-btn" onClick={() => onAssign(document.getElementById("rider-select").value)}>Save</button>
            <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignRiderModal;
