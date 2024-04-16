import { useContext } from "react";
import { WeeksExpensesContext } from "../../contexts/WeeksExpensesProvider";
import { useTranslation } from "react-i18next";

export function TodayExpenses() {
  const { weeksData } = useContext(WeeksExpensesContext);

  const weekExpenses = weeksData[weeksData.length - 1].datasets[0].data;
  const todayExpenses = weekExpenses[weekExpenses.length - 1];
  const { t } = useTranslation();

  return (
    <div className="today-expenses-wrapper">
      <div style={{ opacity: "0.6", fontSize: "0.9em", paddingBottom: "15px" }}>
        {t("todayExpenses")}
      </div>
      <div style={{ fontSize: "3em", fontWeight: "bold" }}>
        {todayExpenses} €
      </div>
    </div>
  );
}
