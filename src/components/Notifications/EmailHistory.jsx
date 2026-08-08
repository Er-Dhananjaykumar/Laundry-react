function EmailHistory({ emails }) {
  return (
    <div>
      <h3>Email History</h3>
      <div className="table-wrapper">
        <table className="notification-table">
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item) => (
              <tr key={item.id}>
                <td>{item.recipient}</td>
                <td>{item.subject}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmailHistory;
