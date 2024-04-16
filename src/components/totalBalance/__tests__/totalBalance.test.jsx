import { render, fireEvent } from "@testing-library/react";
import { TotalBalance } from "../TotalBalance";
import { WeeksExpensesContext } from "../../../contexts/WeeksExpensesProvider";

const testData = {
  weeksData: [
    {
      datasets: [
        {
          label: "Test Label",
          data: [10, 20, 30, 40, 50],
        },
      ],
    },
  ],
  currentWeekData: {
    datasets: [
      {
        label: "Test Label",
        data: [10, 20, 30, 40, 50],
      },
    ],
  },
  setCurrentWeekData: jest.fn(),
};

describe("TotalBalance", () => {
  test("renders without crashing", () => {
    const { queryByTestId, getByAltText } = render(
      <WeeksExpensesContext.Provider value={testData}>
        <TotalBalance />
      </WeeksExpensesContext.Provider>
    );

    expect(queryByTestId("total-week-expense")).not.toBeNull();

    const leftArrow = getByAltText("left-arrow");
    expect(leftArrow).toBeTruthy();

    const rightArrow = getByAltText("right-arrow");
    expect(rightArrow).toBeTruthy();
  });

  test("clicking on arrows updates current week index and data", () => {
    const { getByAltText } = render(
      <WeeksExpensesContext.Provider value={testData}>
        <TotalBalance />
      </WeeksExpensesContext.Provider>
    );

    fireEvent.click(getByAltText("left-arrow"));
    expect(testData.setCurrentWeekData).toHaveBeenCalledWith(
      testData.weeksData[0]
    );

    fireEvent.click(getByAltText("right-arrow"));
    expect(testData.setCurrentWeekData).toHaveBeenCalledWith(
      testData.weeksData[0]
    );
  });
});
