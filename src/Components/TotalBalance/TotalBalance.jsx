import leftArrow from "../../assets/left-arrow-svgrepo-com.svg";
import rightArrow from "../../assets/right-arrow-svgrepo-com.svg";
import { useState, useContext, useEffect } from "react";
import { WeeksExpensesContext } from "../../contexts/WeeksExpensesProvider";
import { useTranslation } from "react-i18next";

export function TotalBalance() {
  const { weeksData, currentWeekData, setCurrentWeekData } =
    useContext(WeeksExpensesContext);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(
    weeksData.length - 1
  );
  const currentWeekExpenses = currentWeekData.datasets[0].data;
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentWeekData(weeksData[currentWeekIndex]);
  }, [t, weeksData, currentWeekIndex, setCurrentWeekData]);

  let totalWeekExpense = 0;
  currentWeekExpenses.forEach((dayExpense) => {
    totalWeekExpense += dayExpense;
  });

  function handleWeek(change) {
    const newWeekIndex = currentWeekIndex + change;

    if (newWeekIndex >= 0 && newWeekIndex < weeksData.length) {
      setCurrentWeekIndex(newWeekIndex);
      setCurrentWeekData(weeksData[newWeekIndex]);
    }
  }

  return (
    <div className="total-balance-wrapper">
      <div>
        <h5>{t("totalBalance")}</h5>
        <div data-testid="total-week-expense" style={{ fontSize: "2em" }}>
          {totalWeekExpense.toFixed(2)} €
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ cursor: "pointer" }}
          src={leftArrow}
          alt="left-arrow"
          className="arrow"
          onClick={() => handleWeek(-1)}
        />
        <img
          style={{ cursor: "pointer" }}
          src={rightArrow}
          alt="right-arrow"
          className="arrow"
          onClick={() => handleWeek(1)}
        />
      </div>
    </div>
  );
}
