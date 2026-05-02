import { useState } from "react";
import { useApp } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import TipCard from "../components/TipCard";

export default function Tips() {
  const { filteredTips, addTip, deleteTip, updateTip } = useApp();
  const [form, setForm] = useState({ title: "", category: "", description: "" });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateTip(editId, form);
      setEditId(null);
    } else {
      addTip(form);
    }
    setForm({ title: "", category: "", description: "" });
  };

  const handleEdit = (tip) => {
    setForm({
      title: tip.title,
      category: tip.category,
      description: tip.description,
    });
    setEditId(tip.id);
  };

  return (
    <div className="container">
      <h2>Security Tips</h2>
      <SearchBar />

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tip title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="btn" type="submit">
          {editId ? "Update Tip" : "Add Tip"}
        </button>
      </form>

      <div className="grid">
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} onDelete={deleteTip} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}