function StatusTimeline({ record, statuses, onStatusChange }) {
  if (!record) return null;

  return (
    <div className="status-timeline">
      <h3>Status Timeline</h3>
      <p><strong>Customer:</strong> {record.customer}</p>
      <p><strong>Current Status:</strong> {record.status}</p>
      <div className="timeline-steps">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={record.status === status ? "timeline-step active" : "timeline-step"}
            onClick={() => onStatusChange(record.id, status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StatusTimeline;
