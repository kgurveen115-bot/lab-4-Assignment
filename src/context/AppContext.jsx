import { createContext, useContext, useEffect, useMemo, useState } from "react";
import tipsData from "../data/tipsData";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [tips, setTips] = useState(tipsData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTip = (tip) => {
    setTips([...tips, { ...tip, id: Date.now() }]);
  };

  const deleteTip = (id) => {
    setTips(tips.filter((tip) => tip.id !== id));
  };

  const updateTip = (id, updatedTip) => {
    setTips(tips.map((tip) => (tip.id === id ? { ...tip, ...updatedTip } : tip)));
  };

  const filteredTips = useMemo(() => {
    return tips.filter((tip) => {
      const matchSearch =
        tip.title.toLowerCase().includes(search.toLowerCase()) ||
        tip.category.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "All" || tip.category === filter;
      return matchSearch && matchFilter;
    });
  }, [tips, search, filter]);

  const categories = ["All", ...new Set(tips.map((tip) => tip.category))];

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        tips,
        addTip,
        deleteTip,
        updateTip,
        search,
        setSearch,
        filter,
        setFilter,
        filteredTips,
        categories,
        quizScore,
        setQuizScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);