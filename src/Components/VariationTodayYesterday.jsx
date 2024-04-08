import { weekData } from "../weekData";

export function VariationTodayYesterday() {
  const weekExpenses = weekData.datasets[0].data;
  const todayExpenses = weekExpenses[weekExpenses.length - 1];
  const yesterdayExpenses = weekExpenses[weekExpenses.length - 2];
  const variationResult =
    ((todayExpenses - yesterdayExpenses) / yesterdayExpenses) * 100;
  let variation = "";

  if (todayExpenses >= yesterdayExpenses) {
    variation = "+" + variationResult.toFixed(2);
  } else {
    variation = "-" + variationResult.toFixed(2);
  }

  return (
    <div className="variation-wrapper">
      <div>{variation}%</div>
      <div>compared to yesterday</div>
    </div>
  );
}
