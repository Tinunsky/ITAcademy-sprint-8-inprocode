import { Bar } from "react-chartjs-2";
import { useContext, useEffect } from "react";
import { WeeksExpensesContext } from "../../contexts/WeeksExpensesProvider";
import { TodayExpenses } from './../todayExpenses/TodayExpenses';
import { VariationTodayYesterday } from './../variationTodayYesterday/VariationTodayYesterday';
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function GraphicData() {
  const { currentWeekData } = useContext(WeeksExpensesContext);
  const { t } = useTranslation();

  const data = currentWeekData;
  useEffect(() => {
  }, [t]);

  const label = currentWeekData.datasets[0].label;

  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
      },
      x: {
        tickets: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  return (
    <div className="graphic-wrapper">
      <h2 style={{ textAlign: "center" }}>{label}</h2>
      <Bar data={data} options={options} />
      <div className="line"></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TodayExpenses />
        <VariationTodayYesterday />
      </div>
    </div>
  );
}
