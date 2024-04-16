import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const WeeksExpensesContext = createContext();

export const WeeksExpensesProvider = ({ children }) => {
  const { t } = useTranslation();
  const initialWeeksData = [
    {
      labels: [
        `${t("days.monday")} 01`,
        `${t("days.tuesday")} 02`,
        `${t("days.wednesday")} 03`,
        `${t("days.thursday")} 04`,
        `${t("days.friday")} 05`,
        `${t("days.saturday")} 06`,
        `${t("days.sunday")} 07`,
      ],
      datasets: [
        {
          label: `${t("expensesPerDay")} 1`,
          data: [30.7, 10, 46.3, 14.4, 18.8, 95, 65.5], // (last week -2) index 0
          backgroundColor: "#f74c16",
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          barBorderRadius: 3,
        },
      ],
    },
    {
      labels: [
        `${t("days.monday")} 08`,
        `${t("days.tuesday")} 09`,
        `${t("days.wednesday")} 10`,
        `${t("days.thursday")} 11`,
        `${t("days.friday")} 12`,
        `${t("days.saturday")} 13`,
        `${t("days.sunday")} 14`,
      ],
      datasets: [
        {
          label: `${t("expensesPerDay")} 2`,
          data: [50.5, 80, 60.7, 70, 110.1, 75, 85.4], // (last week -1) index 1
          backgroundColor: "#f74c16",
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          barBorderRadius: 3,
        },
      ],
    },
    {
      labels: [
        `${t("days.monday")} 15`,
        `${t("days.tuesday")} 16`,
        `${t("days.wednesday")} 17`,
        `${t("days.thursday")} 18`,
        `${t("days.friday")} 19`,
        `${t("days.saturday")} 20`,
        `${t("days.sunday")} 21`,
      ],
      datasets: [
        {
          label: `${t("expensesPerDay")} 3`,
          data: [5.1, 105, 17.5, 44, 154.8, 19.75, 33.3], //  (last week ) index 2
          backgroundColor: "#f74c16",
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          barBorderRadius: 3,
        },
      ],
    },
  ];

  const [weeksData, setWeeksData] = useState(initialWeeksData);

  useEffect(() => {
    setWeeksData(initialWeeksData);
  }, [t]);

  const lastWeekData = weeksData[weeksData.length - 1];
  const lastWeekExpenses = lastWeekData.datasets[0].data;
  const [currentWeekData, setCurrentWeekData] = useState(lastWeekData);

  return (
    <WeeksExpensesContext.Provider
      value={{
        weeksData,
        lastWeekExpenses,
        currentWeekData,
        setCurrentWeekData,
      }}
    >
      {children}
    </WeeksExpensesContext.Provider>
  );
};
