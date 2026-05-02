import { useApp } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useApp();

  return (
    <button
      className="btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}