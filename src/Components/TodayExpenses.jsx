import { weekData } from "../weekData";

export function TodayExpenses() {
  const weekExpenses = weekData.datasets[0].data;
  const todayExpenses = weekExpenses[weekExpenses.length - 1];

  return (
    <div className="today-expenses-wrapper">
      <div style={{ opacity: "0.6", fontSize: "0.9em", paddingBottom: "20px" }}>
        Today expenses
      </div>
      <div style={{ fontSize: "3em", fontWeight: "bold" }}>
        {todayExpenses} €
      </div>
    </div>
  );
}
