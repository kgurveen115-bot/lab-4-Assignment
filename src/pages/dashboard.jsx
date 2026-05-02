import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { tips, quizScore } = useApp();

  const categories = {};
  tips.forEach((tip) => {
    categories[tip.category] = (categories[tip.category] || 0) + 1;
  });

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="grid">
        <div className="card"><h3>Total Tips</h3><p>{tips.length}</p></div>
        <div className="card"><h3>Quiz Score</h3><p>{quizScore}</p></div>
      </div>

      <h3>Tip Categories</h3>
      <div className="grid">
        {Object.keys(categories).map((cat) => (
          <div className="card" key={cat}>
            <h4>{cat}</h4>
            <p>{categories[cat]} tips</p>
          </div>
        ))}
      </div>
    </div>
  );
}