import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "180px",
        padding: "20px",
        background: "#f4f4f4",
      }}
    >
      <h3>CampusHub</h3>

      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>

      <p>
        <Link to="/tasks">Tasks</Link>
      </p>

      <p>
        <Link to="/resources">Resources</Link>
      </p>

      <p>
        <Link to="/profile">Profile</Link>
      </p>
    </div>
  );
}

export default Sidebar;