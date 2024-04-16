import { useContext } from "react";
import { WeeksExpensesContext } from "../../contexts/WeeksExpensesProvider";
import { useTranslation } from "react-i18next";

export function VariationTodayYesterday() {
  const { weeksData } = useContext(WeeksExpensesContext);

  const weekExpenses = weeksData[weeksData.length - 1].datasets[0].data;
  const todayExpenses = weekExpenses[weekExpenses.length - 1];
  const yesterdayExpenses = weekExpenses[weekExpenses.length - 2];
  const variationResult =
    ((todayExpenses - yesterdayExpenses) / yesterdayExpenses) * 100;
  let variation = "";
  const { t } = useTranslation();

  if (todayExpenses >= yesterdayExpenses) {
    variation = "+" + variationResult.toFixed(2);
  } else {
    variation = "-" + variationResult.toFixed(2);
  }

  return (
    <div className="variation-wrapper">
      <div>{variation}%</div>
      <div>{t("comparedToYesterday")}</div>
    </div>
  );
}
