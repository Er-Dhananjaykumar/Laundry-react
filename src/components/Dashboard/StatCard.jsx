import "./Dashboard.css";

function StatCard({
    title,
    value,
    icon,
    color
}) {

    return (

        <div
            className="stat-card"
            style={{ borderTop: `5px solid ${color}` }}
        >

            <div className="card-header">

                <h4>{title}</h4>

                <div
                    className="card-icon"
                    style={{ background: color }}
                >
                    {icon}
                </div>

            </div>

            <h2>{value}</h2>

        </div>

    );

}

export default StatCard;