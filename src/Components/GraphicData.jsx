import { Bar } from "react-chartjs-2";
import { weekData } from "../weekData";
import { TodayExpenses } from "./TodayExpenses";
import { VariationTodayYesterday } from "./VariationTodayYesterday";
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
  const data = weekData;

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
      <h2 style={{ textAlign: "center" }}>Expenses - Last week</h2>
      <Bar data={data} options={options} />
      <div className="line"></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TodayExpenses />
        <VariationTodayYesterday />
      </div>
    </div>
  );
}
