import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        auth.logout();
        navigate("/");
    }

    return (
        <header className="navbar">

            <h2>Laundry Management System</h2>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

        </header>
    );
}

export default Navbar;