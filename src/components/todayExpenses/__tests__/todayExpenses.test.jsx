import { render } from "@testing-library/react";
import { TodayExpenses } from "../TodayExpenses";
import { useContext } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("TodayExpenses", () => {
  test("renderiza los gastos de hoy correctamente", () => {
    const testData = {
      weeksData: [
        {
          datasets: [
            {
              data: [100, 110, 120],
            },
          ],
        },
      ],
    };

    useContext.mockReturnValueOnce(testData);

    const { queryByText } = render(<TodayExpenses />);

    const todayExpenses = testData.weeksData[0].datasets[0].data.slice(-1)[0];

    expect(queryByText(`${todayExpenses} €`)).not.toBeNull();
  });
});
