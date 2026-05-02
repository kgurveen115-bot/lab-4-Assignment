export default function TipCard({ tip, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{tip.title}</h3>
      <p><b>Category:</b> {tip.category}</p>
      <p>{tip.description}</p>
      <div className="card-actions">
        <button className="btn" onClick={() => onEdit(tip)}>Edit</button>
        <button className="btn danger" onClick={() => onDelete(tip.id)}>Delete</button>
      </div>
    </div>
  );
}