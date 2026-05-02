import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>CyberSafe</h2>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/tips">Tips</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
}