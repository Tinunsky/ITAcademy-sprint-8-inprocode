import { render } from "@testing-library/react";
import { VariationTodayYesterday } from "../VariationTodayYesterday";
import { useContext } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("VariationTodayYesterday", () => {
  test("renderiza el porcentaje de variación y el texto de comparación con ayer", () => {
    const testData = {
      weeksData: [
        {
          datasets: [
            {
              data: [110, 120],
            },
          ],
        },
      ],
    };

    useContext.mockReturnValueOnce(testData);

    const { queryByText } = render(<VariationTodayYesterday />);

    const weekExpenses = testData.weeksData[0].datasets[0].data;
    const todayExpenses = weekExpenses[weekExpenses.length - 1];
    const yesterdayExpenses = weekExpenses[weekExpenses.length - 2];
    const variationResult =
      ((todayExpenses - yesterdayExpenses) / yesterdayExpenses) * 100;
    const variation =
      todayExpenses >= yesterdayExpenses
        ? `+${variationResult.toFixed(2)}`
        : `-${variationResult.toFixed(2)}`;

    expect(queryByText(`${variation}%`)).not.toBeNull();
    expect(queryByText("comparedToYesterday")).not.toBeNull();
  });
});
