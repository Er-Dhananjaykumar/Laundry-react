function SmsHistory({ sms }) {
  return (
    <div>
      <h3>SMS History</h3>
      <div className="table-wrapper">
        <table className="notification-table">
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sms.map((item) => (
              <tr key={item.id}>
                <td>{item.recipient}</td>
                <td>{item.message}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SmsHistory;
