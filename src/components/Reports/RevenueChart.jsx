function RevenueChart({ data, range, year }) {
  const highestValue = Math.max(...data.map((item) => item.sales));

  return (
    <div>
      <div className="chart-header">
        <h3>Revenue Trend</h3>
        <span>{range === "monthly" ? `Monthly View • ${year}` : `Yearly View • ${year}`}</span>
      </div>

      <div className="chart-bars">
        {data.map((item) => (
          <div key={item.month} className="bar-group">
            <div
              className="bar"
              style={{ height: `${(item.sales / highestValue) * 100}%` }}
              title={`${item.month}: ₹${item.sales.toLocaleString()}`}
            />
            <span>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueChart;
