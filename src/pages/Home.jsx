import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Cybersecurity Awareness Dashboard</h1>
      <p>
        A React project to manage safety tips, explore awareness content, and learn security basics.
      </p>
      <Link className="btn" to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}