import leftArrow from "../../assets/left-arrow-svgrepo-com.svg";
import rightArrow from "../../assets/right-arrow-svgrepo-com.svg";
import { weekData } from "../../weekData";

export function TotalBalance() {
  const weekExpenses = weekData.datasets[0].data;
  let totalWeekExpense = 0;
  weekExpenses.forEach((dayExpense) => {
    totalWeekExpense += dayExpense;
  });

  return (
    <div className="total-balance-wrapper">
      <div>
        <h5>Total balance</h5>
        <div style={{ fontSize: "2em" }}>{totalWeekExpense.toFixed(2)} €</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={leftArrow} alt="left-arrow" className="arrow" />
        <img src={rightArrow} alt="right-arrow" className="arrow" />
      </div>
    </div>
  );
}
